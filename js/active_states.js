const productImages = document.querySelectorAll(".product-preview");
const mainProductImage = document.querySelector(".product-image");

for (let i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener("click", function () {
    for (let j = 0; j < productImages.length; j++) {
      if (productImages[i] !== productImages[j]) {
        productImages[j].classList.remove("image-active");
      }
    }
    productImages[i].classList.toggle("image-active");
    mainProductImage.src = productImages[i].src
  })
}