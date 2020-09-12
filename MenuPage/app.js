var count=0;
var cartPicked = []
const handleAddToCart = (e) => {
  count+=1
  document.querySelectorAll('.count').forEach(counting => counting.innerHTML = `${count} items in cart`);
  
    let currentItem = e.target.parentElement.parentElement.parentElement.childNodes[1].innerText
    cartPicked.push(currentItem)

    let html=''
cartPicked.forEach(function(picked){
    html+=` 
    <div p-1 >
    <button type="button" onclick="removeItem(this)" class="close text-left" id=' removeItem' style='color: black; text-shadow: 2px 2px 4px grey ; ' data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    ${picked}
    <hr>
    </div>
  
    
    `
});
  document.querySelector('.cartItems').innerHTML= html;

    
   e.preventDefault();
}
document.querySelectorAll('.addToCart').forEach(item => item.addEventListener('click', handleAddToCart));






const removeItem = (e) => {
  e.parentElement.remove()


}

