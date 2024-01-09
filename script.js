let cartTotal = 0

// const addButtons = document.querySelectorAll("#actions button")
// const addButton = document.getElementById("add-button")

// addButton.addEventListener("click", addToCart)

// let btns = document.querySelectorAll("button")

// addButtons.forEach((addButton) => {
//     addButton.addEventListener("click", addToCart)
// })

//function adds items to cart and adds up total
function addToCart(element) {
    //
    let singleItemElement = element.closest(".single_item")
    let itemName = singleItemElement.querySelector(".item_name").innerText
    let itemPrice = singleItemElement.querySelector(".item_price").innerText
    let itemQuantity = singleItemElement.querySelector("input").value

    // string to int
    itemPrice = parseInt(itemPrice.substring(1))
    itemQuantity = parseInt(itemQuantity)

    // adding up total value of every item separately
    let itemPriceTotal = itemPrice * itemQuantity

    // adding up every separately values all together
    cartTotal += itemPriceTotal

    const cart = document.getElementById("cart")

    cart.innerHTML += `  <div
                        class="row flex-nowrap pt-3 cart_single_item"
                        >
                            <div class="col-3 p-0"><h6 class="lh-base">${itemName}</h6></div>
                            <div class="col-5 text-center p-0">
                            <p>${itemQuantity} x ${itemPrice} = $<span>${itemPriceTotal}</span></p>
                             </div>
                            <div class="col text-end p-0">
                            <button
                            onclick="removeFromCart(this)" 
                                id="remove-item"
                                class="btn btn-primary remove_button">
                                Remove
                            </button>
                        </div>
                        </div> `

    const total = document.getElementById("total")
    total.innerHTML = `<div class="col pb-3  fs-4"><p>Total: $${cartTotal}</p></div>`
}

//function removes items from cart and subtracts total
function removeFromCart(element) {
    let cartSingleItemElement = element.closest(".cart_single_item")
    let itemPriceTotal = cartSingleItemElement.querySelector("p span").innerText

    // let price = mainEl.querySelector("p span").innerText
    // let name = mainEl.querySelector("h3").innerText
    let vegetables = document.querySelectorAll(".single_item")
    console.log(vegetables)

    itemPriceTotal = parseInt(itemPriceTotal)

    cartTotal -= itemPriceTotal

    document.getElementById("total").innerHTML = `<div class="col pb-3  fs-4"><p">Total: $${cartTotal}</p></div>`

    cartSingleItemElement.remove()
}
