#inbuilt modules
import os
import random
import datetime
import re, ast
#other needed libraries
from flask import Flask, jsonify, request, make_response, abort, render_template, url_for, redirect, flash
from flask_mail import Mail, Message
from werkzeug.security import generate_password_hash, check_password_hash
from flask_pymongo import PyMongo
from paystackapi.paystack import Paystack
from flask_jwt_extended import JWTManager ,create_access_token, get_jwt_identity ,jwt_required, jwt_optional,fresh_jwt_required, set_access_cookies,unset_jwt_cookies
#our files
from config.schema.userschema import validate_reg, validate_login
from utils.payment import new_transaction, verify_transaction
# from utils.mail import send_mail_message
from utils.sms import send_text_message
# from transactions import insert_transactions

#initalize the app
app = Flask(__name__)
jwt = JWTManager(app)
mail = Mail(app)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY')
app.config['JWT_TOKEN_LOCATION'] = 'cookies'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=100)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'

#initialize the db
app.config['MONGO_URI'] = os.environ.get('MONGO_URI')
# app.config['MONGO_URI'] = "mongodb://localhost:27017/foodies-first"
mongo = PyMongo(app)

#db collections
users_db = mongo.db.users
foods_db = mongo.db.foods

# #initialize the paystack
# paystack_secret_key = "sk_test_8ccb813635fe88d4ce488fc9c8fb576ea6db1a8e"
# paystack = Paystack(secret_key=paystack_secret_key)

@app.route("/")
@jwt_optional
def home():
    identity = get_jwt_identity()
    if(identity):
        return render_template('index.html',logged_in=True)    
    return render_template('index.html',logged_in=False)

@app.route("/about")
@jwt_optional
def about():
    identity = get_jwt_identity()
    if(identity):
        return render_template('about.html',logged_in=True)    
    return render_template('about.html',logged_in=False)

"""
@app.route("/get_checkout")
@jwt_optional
def about():
    identity = get_jwt_identity()
    user = users_db.find_one(identity);
    if(identity):
        return render_template('checkout.html',data=user,logged_in=True)    
    return render_template('about.html',data={},logged_in=False)
"""


"""Authentication"""
@app.route("/register", methods=['GET','POST'])
def register():
    """
    required
        $curl -X POST /register
        -H "Content-Type: application.json"
        -d '{"email": "example@example.com",
             "username": "John_Doe",
             "gender": "M/F/something_else",
             "password": "xxxxxx",
             "phone_number:""
        }'
    """
    try:
        #I think only emails will be unique
        if request.method == 'POST':
            username = request.form.get("username")
            email = request.form.get('email')
            phone = request.form.get('phone')
            password = request.form.get('password')
            confirmPassword = request.form.get('confirmPassword')        
            data = {
                'username':username,
                'email':email,
                'password':password
            }

            # validate email
            if not re.fullmatch(r"([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)", email):
                del data['password']
                data['error'] = "Enter valid email"
                return render_template('register.html',data=data)
            
            if users_db.find_one({"email":email}):
                del data['password']
                data['error'] = "Email already registered with us, please click below to sign in"
                return render_template('register.html',data=data)
            
            if password != confirmPassword:
                del data['password']
                data['error'] = "Passwords do not match"
                return render_template('register.html',data=data)

            val = validate_reg(data)
            if val['msg'] == "error":
                del data['password']
                data['error'] = val['error']
                return render_template('register.html',data=data)
            #hash the passwords and save
            password_hash = generate_password_hash(data['password'])
            data['password'] = password_hash
            #instantiate
            today = datetime.datetime.now()
            data['admin'] = False
            data['isVerified'] = False
            data['createdAt'] = today.strftime("%d %m %Y %H : %M : %S")
            data['updatedAt'] = today.strftime("%d %m %Y %H : %M : %S")

            resp = make_response(redirect('/'))
            resp.headers.set('CONTENT-TYPE', 'text/html')

            token = create_access_token(identity = {'email':email,'username':username})
            data['token'] = token
            set_access_cookies(resp,token)

            # save to db
            users_db.insert_one(data)

            return resp
        return render_template('register.html',data={})
    except:
        return render_template('500.html')

@app.route("/login",methods=['GET','POST'])
def login():
    try:
        if request.method == "POST":
            email = request.form.get('email')
            password = request.form.get("password")
            data = {
                'email':email,
                'password':password
            }
            user = users_db.find_one({'email':data['email']})
            if not user:
                # we need to change this part to display incorrect email
                del data['password']
                data['error'] = "Invalid email and password"
                flash(data.get('error'))
                return render_template('login.html',data=data)
            if (not check_password_hash(user['password'],data['password'])):
                # same for this place
                data['error'] = "Invalid email and password"
                flash(data.get('error'))
                return render_template('login.html',data=data)
            
            resp = make_response(redirect('/'))
            resp.headers.set('CONTENT-TYPE', 'text/html')
            
            token = create_access_token(identity = {'email':email,'username':user['username']})

            users_db.update_one({'email':email},{"$set":{"token":token}})

            set_access_cookies(resp,token)
                
            return resp
        return render_template('login.html',data={},logged_in=False)
    except:
        return render_template('500.html')

@app.route('/logout')
def logout():
    try:
        resp = make_response(redirect(url_for('login')))

        unset_jwt_cookies(resp)

        return resp
    except:
        return render_template('500.html')

@app.route("/order")
@jwt_optional
def order():
    return render_template("order.html")


@app.route("/confirm/pay/<reference>")
def confirmpay(reference):
    data = verify_transaction(reference) 
    if (data['verify']):
        #include in the transactions page
        insert_transactions(data)

        #send the message
        send_text_message("deliver " + cart + "by " + time)
        # flash("Payment made successfully, order is coming through")
        return redirect(url_for('verified_pay'))
    # flash("invalid email")
    return redirect(url_for('unverified_pay'))


"""CHECKOUT"""
@app.route("/checkout", methods=['GET','POST'])
@jwt_optional
def checkout():
    try:
        identity = get_jwt_identity()
        if request.method == 'POST':
            total_price = 0
            data = request.get_json
            cart = data['cart']
            if not data:
                return url_for('invalid_request'), 400
            for meal_data in cart:
                val = foods.find_one({'meal':meal_data['meal']})
                if not val:
                    return url_for('invalid_request'), 400
                total_price += val['price'] * meal_data['qty']
            
            # paystack recieves amount in kobo so convert to kobo
            total_price *= 100
            # get user email from profile or sum
            identity = get_jwt_identity()
            if identity:
                user = users_db.find_one(identity)
                email = user['email']
            else:
                email = data['email']
            
            success,payment_url = new_transaction(email,total_price)
            if success:
                return jsonify({
                    "success":True,
                    "url":payment_url
                })
            else:
                return jsonify({
                    "success":False,
                }), 400
        if(identity):
            user = users_db.find_one(identity);
            return render_template('checkout.html',data=user,logged_in=True)
        return render_template("checkout.html",logged_in=False)
    except:
        return render_template('500.html')



@app.route('/mailus')
@jwt_optional
def mail_us():
    pass

@app.route("/admin/transactions",methods=['POST','GET'])
@jwt_required
def my_transactions():
    user = get_jwt_identity()
    user = model.find_one(user)
    if(not is_admin(user)):
        return render_template('401.html'),401
    if request.method == "POST":
        try:
            statuses = ["successful","pending","failed"]
            status = request.get_json().get("status")
            if status not in statuses:
                raise ValueError("Invalid Status")
            transaction_id = request.get_json().get("transaction_id")
            #use bson to convert status to string
            transactions = transactions_db.update_one({'_id':transaction_id,"$set":{"status":status}})
            return jsonify({
                "success":True,
                "data":new_status
            }),200
        except:
            return jsonify({
                "success":False
            }),404
    transactions = transactions_db.find({'user_id':user_id}).sort('createdAt',1)
    data = [transaction for transaction in transactions]

    return render_template('transactions.html',data=data)

@jwt.unauthorized_loader
def unauthorized(callback):
    return redirect('/login')

@app.route('/recovery', methods=['POST', 'GET'])
def recover():
    if request.method == 'POST':
        email = request.form.get('email')
        user = users_db.find_one(email)
        if user:
            # send recovery token to email
            return render_template('account_recovery3.html')
        else:
            # user not found
            return render_template('404.html')
    return render_template('account-recovery1.html')

# recovery email leades to this route
@app.route('/recovery/change_pass')
def change_pass():
    if request.method == 'POST':
        email = request.form.get('email')
        pass1 = request.form.get('password')
        pass2 = request.form.get('password2')
        if pass1 != pass2:
            data = "passwords do not match!"
            return render_template('account-recovery2.html', data=data)
        user = users_db.find_one(email)
        if user:
            # change email
            users_db.update_one({'email':email,"$set":{"password":password}})
            return render_template('account-recovery4.html')
        else:
            return render_template('404.html')
    return render_template('account-recovery2.html')

if __name__ == "__main__":
    app.run(debug=True)
