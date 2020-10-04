// Carousel Swiper
 var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
console.log('PRIVET');

//Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// HTML
var price = document.getElementsByClassName('prise');
console.log(price[0].textContent);
for(i=0; i<3;i++)
if (price[i].textContent == 'free') {
  price[i].style.color = 'rgb(30, 175, 19)';
}
