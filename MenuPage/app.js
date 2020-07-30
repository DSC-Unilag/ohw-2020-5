const addToCart = document.querySelector('.addToCart');



const handleAddToCart = (e) => {
    console.log(e.target.parentElement.parentElement.parentElement)
   e.preventDefault();
}

addToCart.addEventListener("click", handleAddToCart)