function async (confirmPayment,e){
    e.preventDefault;
    const email = document.getElementById('checkout-email').value;
    const name = document.getElementById('checkout-name').value;
    const deliver = document.getElementById('delivery-method').value;
    const address = document.getElementById('checkout-address').value;

    const cart = window.sessionStorage.getItem('carts');

    var data = {
        email,
        name,
        deliver,
        address,
        cart
    }


    if (deliver == 1 && address.length !== "") {
        const response = await fetch('localhost:5000/confirm_payment',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const resp = await response.json();
        
        if (resp.success){
            window.location.href = resp.url
        }
        //probably getting the error somewhere

    }
}