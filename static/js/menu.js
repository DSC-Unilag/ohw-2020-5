const monday = {
    "breakfast": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and Scrambled eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and scrambled eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and Egg Sauce</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and Egg Sauce" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N700</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake" value="700">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Classic Waffles</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N800</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Classic Waffles" value="800">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`,
    "lunch": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/ye.png" class="order_meal_img" >
		    			<p class="meal_name">Boiled Yam and Egg sauce</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N500</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Boiled Yam and Egg sauce" value="500">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/ye.png" class="order_meal_img" >
		    			<p class="meal_name">Boiled Yam and Egg sauce + Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Boiled Yam and Egg sauce + Chicken" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/bakedChickenWings.png" class="order_meal_img" >
		    			<p class="meal_name">Chicken Wings</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Chicken Wings" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/mostOrderedMenu3.png" class="order_meal_img" >
		    			<p class="meal_name">Crispy Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N600</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Crispy Chicken" value="600">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`
}

const wednesday = {
    "breakfast": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/snt.png" class="order_meal_img" >
		    			<p class="meal_name">Single Toasts - Scrambled eggs + Saugages</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N700</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Single Toasts - Scrambled eggs + Saugages" value="700">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/snt.png" class="order_meal_img" >
		    			<p class="meal_name">Single Toasts + Egg Sauce + Sausages</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N700</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Single Toasts + Egg Sauce + Sausages" value="700">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`,
    "lunch": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pasta + Sauce + Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1300</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pasta + Sauce + Chicken" value="1300">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/agoyin.png" class="order_meal_img" >
		    			<p class="meal_name">Ewa Agoyin + Plantain + Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1200</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Ewa Agoyin + Plantain + Chicken" value="1200">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/pg.png" class="order_meal_img" >
		    			<p class="meal_name">Peppered Gizzard</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Peppered Gizzard" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/pg.png" class="order_meal_img" >
		    			<p class="meal_name">Gizdodo</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Gizdodo" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`
}

const thursday = {
    "breakfast": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`,
    "lunch": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`
}

const friday = {
    "breakfast": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N700</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake" value="700">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and Scrambled eggs</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and Scrambled eggs" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Pancake and Egg Sauce</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1000</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Pancake and Egg Sauce" value="1000">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/1.png" class="order_meal_img" >
		    			<p class="meal_name">Classic Waffles</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N800</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Classic Waffles" value="800">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`,
    "lunch": `
<div class="meal_item">
					<center>
		    			<img src="../static/images/5.png" class="order_meal_img" >
		    			<p class="meal_name">Jollof Rice + Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1200</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Jollof Rice + Chicken" value="1200">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/7.png" class="order_meal_img" >
		    			<p class="meal_name">Fried Rice + Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N1200</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Fried Rice + Chicken" value="1200">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/mostOrderedMenu3.png" class="order_meal_img" >
		    			<p class="meal_name">Crispy Chicken</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N600</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Crispy Chicken" value="600">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
	    		<div class="meal_item">
					<center>
		    			<img src="../static/images/4.png" class="order_meal_img" >
		    			<p class="meal_name">Fries</p>
		    			<p style="text-align: left;padding: 0rem 0.4rem;">
		    				<span class="price">N500</span>
		    				<button class="add_to_cart" onclick="add_to_cart(event)" name="Fries" value="500">Add To Cart</button>
		    			</p>
		    		</center>
	    		</div>
`
}
