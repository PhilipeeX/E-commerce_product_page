const cartBtn = document.querySelector('.cart-icon')
const cartElement = document.getElementById('cart-floating')
const cartElementBody = document.getElementById('cart-body')
const sumBtn = document.getElementById('add_product_quantity')
const minusBtn = document.getElementById('minus_product_quantity')
const productQuantity = document.getElementById('product_quantity')
const addItemToCartBtn = document.getElementById('add-item-to-cart')
let removeItemBtns = document.querySelectorAll(".product-thumb-discard")

function addRemoveItemEventListeners() {
  const removeItemBtns = document.querySelectorAll(".product-thumb-discard");

  for (let i = 0; i < removeItemBtns.length; i++) {
    removeItemBtns[i].addEventListener('click', () => {
      removeItemBtns[i].parentElement.remove()
      document.querySelector('.cart-product-quantity').remove()
      if (removeItemBtns.length === 1){
        const checkoutBtn = document.querySelector('.checkout')
        checkoutBtn.classList.toggle('visible')
        let blankCartMsg = document.createElement("p")
        blankCartMsg.innerText = 'Your cart is empty.'
        cartElementBody.append(blankCartMsg)
      }
    })
    
  }
}
addRemoveItemEventListeners()
  
cartBtn.addEventListener("click", () => {
  if (menu.classList.contains('visible')) {
    menu.classList.toggle('visible');
  }
  cartElement.classList.toggle('visible');
})

sumBtn.addEventListener("click", () => {
  let quantity = Number(productQuantity.innerText);
  if (quantity === 0){
    addItemToCartBtn.classList.toggle('inactive')
  }
  productQuantity.innerText = quantity + 1
})

minusBtn.addEventListener("click", () => {
  let quantity = Number(productQuantity.innerText);
  if (quantity > 0){
    if (quantity === 1){
      addItemToCartBtn.classList.toggle('inactive')
    }
    productQuantity.innerText = quantity - 1
  }
})

addItemToCartBtn.addEventListener("click", () => {
  let quantity = Number(productQuantity.innerText);
  let blankCartMsg = cartElementBody.querySelector('p');
  const productImage = document.querySelector('.product-image').src
  const productDescription = document.querySelector('.description-text > h2').innerText
  const productPrice = document.querySelector('.current-price').innerText.slice(1,-1)
  const cartBodyProduct = document.querySelector('#cart-body-filled')
  const productTitles = document.querySelectorAll('.product-thumb-description > span:first-of-type')
  const checkoutBtn = document.querySelector('.checkout')
  let newCartProduct = document.createElement("div")
  let newCartQuantity = document.createElement("span")
  let finalPriceCalculated = Number(productPrice)
  const cartIcon = document.querySelector('.cart-icon')
  
  if (quantity !== 0){
    
    if (blankCartMsg) {
      cartElementBody.removeChild(blankCartMsg);

      newCartQuantity.classList.add('cart-product-quantity')
      newCartQuantity.innerText = quantity
      cartIcon.append(newCartQuantity)

      newCartProduct.classList.add('product-thumb')

      newCartProduct.innerHTML =
        `
        <div class="product-thumb-limit">
          <img class="product-thumb-img" src="${productImage}" alt="${productDescription}">
        </div>
        <div class="product-thumb-description">
          <span>${productDescription}</span>
          <div>
            <div class="thumb-price">
              <span>${productPrice} x </span>
              <span class="thumb-product-quantity">${quantity}</span>
            </div>
            <span>$<span class="final-price">${(quantity * productPrice).toFixed(2)}</span></span>
          </div>
        </div>
        <div class="product-thumb-discard">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </div>
      `
      cartBodyProduct.append(newCartProduct)

      removeItemBtns = document.querySelectorAll(".product-thumb-discard")
      addRemoveItemEventListeners()
      checkoutBtn.classList.toggle('visible');
    }
    if (!cartElement.classList.contains('visible')) {
      cartElement.classList.toggle('visible');
    }

    for (let i = 0; i < productTitles.length; i++) {
      let productQuantity = Number(productTitles[i].parentElement.querySelector('.thumb-product-quantity').innerText)
      productQuantity += quantity
      finalPriceCalculated = productQuantity * Number(productPrice)
      productTitles[i].parentElement.querySelector('.thumb-product-quantity').innerText = productQuantity
      document.querySelector('.cart-product-quantity').innerText = productQuantity
      productTitles[i].parentElement.querySelector('.final-price').innerText = finalPriceCalculated.toFixed(2)
    }
  }
})
