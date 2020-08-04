import datetime, os
from paystackapi.paystack import Paystack
from paystackapi.transaction import Transaction
from paystackapi.tcontrol import TransferControl
import json, ast

try:
    with open('../secret.txt', 'r') as sec:
        secret = ast.literal_eval(sec.read())
except:
    pass

paystack_secret_key = os.environ.get('PAYSTACK_SECRET_KEY') or secret['PAYSTACK_SECRET_KEY']
paystack = Paystack(secret_key=paystack_secret_key)


def new_transaction(email, price,cart):
    # start transaction and get payment url
    # reference = request.args.get("reference")
    # gets args from the checkout endpoint
    amount = price
    response = Transaction.initialize(
        amount=amount, email=email,callback_url="localhost:5000",metadata=cart)
    response =  json.load(response)
    if response["status"]:
        payment_url = response['data']["authorization_url"]
        return True,payment_url
    else:
        return False,""

def verify_transaction(reference):
    resp = Transaction.verify(reference=reference)
    resp = json.load(resp)
    if resp['data']['status'] == "success":
        data = {
            "verify" : True,
            "data" : resp['customer']['metadata']['cart'],
            ""
        }
        return data 
    return {
        "verify" :False
    }