const menuIcon = document.querySelector('.menu-icon')
const menu = document.getElementById('menu')
const closeMenu = document.querySelector('.close-menu-btn')

menuIcon.addEventListener("click", () => {
  if (cartElement.classList.contains('visible')) {
    cartElement.classList.remove('visible');
  }
  menu.classList.toggle('visible');
})

closeMenu.addEventListener("click", () => {
  menu.classList.toggle('visible');
})
