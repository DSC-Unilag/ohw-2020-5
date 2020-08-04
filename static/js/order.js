window.sessionStorage.getItem('carts') ? '' : window.sessionStorage.setItem('carts', JSON.stringify([]));
const checkout_btn = document.getElementById('check_me_out');

function main() {    
    const date = new Date;
    var today = date.getDay() + 2;
    const days = ["monday","monday","wednesday","wednesday","friday","friday","monday"];
    var today = days[today];
    switch (today) {
        case "monday":
            var breakfast = document.getElementById('breakfast_order');
            breakfast.innerHTML = monday.breakfast;
            var lunch = document.getElementById('lunch_order');
            lunch.innerHTML = monday.lunch;
            break;
        case "wednesday":
            var breakfast = document.getElementById('breakfast_order');
            breakfast.innerHTML = wednesday.breakfast;
            var lunch = document.getElementById('lunch_order');
            lunch.innerHTML = wednesday.lunch;
            break;
        case "thursday":
            var breakfast = document.getElementById('breakfast_order');
            breakfast.innerHTML = thursday.breakfast;
            var lunch = document.getElementById('lunch_order');
            lunch.innerHTML = thursday.lunch;
            break;
        case "friday":
            var breakfast = document.getElementById('breakfast_order');
            breakfast.innerHTML = friday.breakfast;
            var lunch = document.getElementById('lunch_order');
            lunch.innerHTML = friday.lunch;
            break;
        default:
            break;
    }
}

function add_to_cart(e) {
    const meal_name = e.target.name;
    const meal_price = e.target.value;

    const hr = document.createElement("hr");
    const new_checkout_div = document.createElement("div");
    const new_checkout_meal = document.createElement("span");
    const new_checkout_button = document.createElement("button");
    new_checkout_div.setAttribute("id", "check");
    new_checkout_div.setAttribute("style", "padding:1rem;");

    new_checkout_meal.setAttribute("class", "meal_checkout")
    new_checkout_button.setAttribute("class", "remove_meal_checkout")
    new_checkout_button.setAttribute("onclick", "remove_from_cart(event)")
    new_checkout_meal.appendChild(document.createTextNode(meal_name))
    new_checkout_button.appendChild(document.createTextNode("X"))

    new_checkout_div.appendChild(hr);
    new_checkout_div.appendChild(new_checkout_meal);
    new_checkout_div.appendChild(new_checkout_button);

    document.getElementById('checkouts').appendChild(new_checkout_div);
    const new_array = {
        "meal_name": meal_name,
        "meal_price": meal_price
    };
    var items = JSON.parse(window.sessionStorage.getItem("carts"));
    items.push(new_array);
    window.sessionStorage.setItem("carts", JSON.stringify(items));
}

function remove_from_cart(e) {
    const parent = e.target.parentNode
    const parent_div = document.getElementById('checkouts')
    parent_div.removeChild(parent);
    meal_name = e.target.name;
    var items = window.sessionStorage.getItem("carts");

    items = items.filter(item => item.meal_name != meal_name)

    window.sessionStorage.setItem("carts",JSON.stringify(items));
}


main();