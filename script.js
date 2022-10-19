// Carrousel
const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
button.addEventListener('click', event => {
    if (event.target.id === 'previous') {
    if (imageIndex !== 1) {
        imageIndex--;
        translateX += 800;
    }
    } else {
    if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 800;
    }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
});
});

// Boton linux
function msg() {
    alert('This game is supported \n on Linux')
}

// sumador de carrito
let cart = 0
const count = document.querySelector('.count_cart')
// console.log(count);
function add() {
    cart++;
    count.innerHTML=cart
}