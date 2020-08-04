from server import mongo
from datetime.datetime import now
tranactions_db = mongo.db.transactions

def insert_transactions(data):
    """ 
        transactions = {
            'user_id',
            'meal_items',
            'total_price',
            'createdAt'
        }

    """
    try:
        now = now().strftime("%d %m %Y %H : %M : %S")
        tranactions_db.insert_one({
            'user_email':data['email'],
            'meal_items':data['phone_number'],
            'total_price':data['amount'],
            'createdAt':now,
        })

        return True
    except:
        return False