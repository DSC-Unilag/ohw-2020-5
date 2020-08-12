from twilio.rest import Client
import os, ast
    
account_sid = "AC9cc6e5bc955cd2708dd4694cf2750e63"

auth_token  = "b2ae9a9bd65335a84378e1246717251a"

def send_text_message(message):
    
    message = client.messages.create(
        to="+2347089961880",
        from_="+2347089961880",
        body=message
    )
