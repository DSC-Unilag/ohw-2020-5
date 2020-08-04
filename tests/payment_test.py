import requests, json
from pprint import pprint

base = "http://127.0.0.1:5000/"

# test for payment
def transaction_test():
    url = "create_transaction/"
    data = {"amount": 10000,"email":"example@gmail.com"}
    request_uri = "".join([base,url])

    response = requests.post(request_uri, params=data)
    response = json.loads(response.text)
    print(response["payment_url"])
    # the link to the payment page

def get_transactions_test():
    url = "get_transactions/"
    request_uri = "".join([base,url])

    response = requests.get(request_uri)
    response = json.loads(response.text)   
    pprint(response["transactions"][-1])

def check_balance():
    url = 'get_balance/'
    request_uri = "".join([base,url])

    response = requests.get(request_uri)
    response = json.loads(response.text)
    print(response['message'])

if __name__ == "__main__":
    transaction_test()
    get_transactions_test()
    check_balance()
    