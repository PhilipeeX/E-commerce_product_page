const lightBox = document.querySelector('.lightbox')
const productImage = document.querySelector('.product-image')
const lightboxClose = document.querySelector('.lightbox__exit')

productImage.addEventListener("click", () => {
  lightBox.classList.add('lightbox--visible')
})

lightboxClose.addEventListener("click", () => {
  lightBox.classList.remove('lightbox--visible')
})
