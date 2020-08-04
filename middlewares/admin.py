# this should be taken of when moved to server file
from ../server import mongo

users_db = mongo.db.users

def admin(email):
    try:
        user = users_db.find_one({'email':email})
        if(user['admin']):
            return True
        return False
    except:
        #should never happen
        return False