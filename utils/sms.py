from twilio.rest import Client
import os, ast

try:
    with open('../secret.txt', 'r') as sec:
        secret = ast.literal_eval(sec.read())
except:
    pass
    
account_sid = "AC9cc6e5bc955cd2708dd4694cf2750e63"

auth_token  = os.environ.get('TWILO_AUTH_TOKEN') or secret['TWILO_AUTH_TOKEN']

def send_text_message(message):
    
    message = client.messages.create(
        to="+2347089961880",
        from_="+2347089961880",
        body=message
    )
