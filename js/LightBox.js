const lightBox = document.querySelector('.lightbox');
const productImage = document.querySelector('.product-image');
const lightboxClose = document.querySelector('.lightbox__exit');
const lightboxImages = document.querySelectorAll(".lightbox__thumb");
const lightBoxMainImage = document.querySelector('.lightbox__main_image')
const arrowLeft = document.querySelector('.lightbox__arrow_left')
const arrowRight = document.querySelector('.lightbox__arrow_right')


productImage.addEventListener("click", () => {
  lightBox.classList.add('lightbox--visible');
  lightboxImages[0].classList.add("image-active");
})

lightboxClose.addEventListener("click", () => {
  lightBox.classList.remove('lightbox--visible');
})

for (let i = 0; i < lightboxImages.length; i++) {
  lightboxImages[i].addEventListener("click", function () {
    for (let j = 0; j < lightboxImages.length; j++) {
      if (lightboxImages[i] !== lightboxImages[j]) {
        lightboxImages[j].classList.remove("image-active");
      }
    }
    lightboxImages[i].classList.toggle("image-active");
    lightBoxMainImage.src = lightboxImages[i].src
  })
}

arrowRight.addEventListener("click", () => {
  for (let i = 0; i < lightboxImages.length; i++) {
    if (lightboxImages[i].classList.contains("image-active") && i === lightboxImages.length - 1) {
      lightBoxMainImage.src = lightboxImages[0].src
      lightboxImages[i].classList.remove("image-active");
      lightboxImages[0].classList.add("image-active");
    }else if (lightboxImages[i].classList.contains("image-active")){
      lightBoxMainImage.src = lightboxImages[i + 1].src
      lightboxImages[i].classList.remove("image-active");
      lightboxImages[i + 1].classList.add("image-active");
      break
    }
  }
})

arrowLeft.addEventListener("click", () => {
  for (let i = 0; i < lightboxImages.length; i++) {
    if (lightboxImages[i].classList.contains("image-active") && i === 0) {
      lightBoxMainImage.src = lightboxImages[lightboxImages.length - 1].src
      lightboxImages[i].classList.remove("image-active");
      lightboxImages[lightboxImages.length - 1].classList.add("image-active");
      break
    }else if (lightboxImages[i].classList.contains("image-active")){
      lightBoxMainImage.src = lightboxImages[i - 1].src
      lightboxImages[i].classList.remove("image-active");
      lightboxImages[i - 1].classList.add("image-active");
      break
    }
  }
})
