let allTotal = 0

//function adds items to cart and adds up total
function addToCart (element){
    let mainEl = element.closest(".single-item")
    let price = mainEl.querySelector(".price").innerText
    let name = mainEl.querySelector("h3").innerText
    let quantity = mainEl.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")

    if (parseInt(quantity) > 0){
        
        price = parseInt(price.substring(1))
        quantity = parseInt(quantity)
        
        let total = price * quantity

        allTotal += total

        cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>${quantity} x ${price} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>` 
        
        document.querySelector(".total").innerText = `Total: $${allTotal}`

        element.innerText = "Added"
        
        


    }else{
        alert("Zero quantity! Add at least 1!")
    }    
}

//function removes items from cart and subtracts total
function removeFromCart(element){
    let mainEl = element.closest(".cart-single-item")
    let price = mainEl.querySelector("p span").innerText
    price = parseInt(price)

    allTotal -= price
  
    document.querySelector(".total").innerText = `Total: $${allTotal}`

    mainEl.remove()
}







