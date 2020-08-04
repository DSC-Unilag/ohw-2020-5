# this should be taken of when moved to server file
from server import mongo
from flask import Flask, request, jsonify, abort

foods_db = mongo.db.foods

# for admin to populate db with foods and prices
"""
        paramas = {
            "meal": "eba"
            "price": 250
        }
"""


def create_bulk_meal(data):
    # add multiple meals to db at once
    try:
        meals = [val for val in data]
        result = foods_db.insert_many(meals)
        return jsonify({
            "success": True,
            "msg": "Meals added to db"
        })
    except:
        abort(500)


def create_single_meal(meal, price,description):
    # add single meal name and price to db
    try:
        if foods_db.find_one({'meal':meal}):
            return jsonify({
                'msg':'Use update endpoint to update db'
            }),400

        data = {
            'meal': meal,
            'price': price 
        }
        food = foods_db.insert_one(data)
        return jsonify({
            "success": True,
            "msg": "Meal added to db"
        })
    except:
        abort(500)

def verify_mail():
    
            # validate phone number
            # try:
            #     num = str(phone)
            #     if len(num) < 11 or len(num) > 14:
            #         del data['password']
            #         data['error'] = "Invalid phone number"
            #         return render_template('register.html',data=data)
            #     if len(num) == 11:
            #         if num[0:3] != '080':
            #             del data['password']
            #             data['error'] = "Invalid phone number"
            #             return render_template('register.html',data=data)
            #     else:
            #         if num[0:3] != '234' or num[0:4] != '+234':
            #             del data['password']
            #             data['error'] = "Invalid phone number"
            #             return render_template('register.html',data=data)
            # except:
            #     return redirect(url_for('internal_server_error'))
            # add number to data
            data['phone'] = phone
