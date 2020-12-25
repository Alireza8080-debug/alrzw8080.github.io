const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");
const content5 = document.querySelector(".content5");
const content6 = document.querySelector(".content6");

const card = document.querySelectorAll('.card');

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 800 && window.pageYOffset < 1500) {
      content1.classList.add('animation1');
      content2.classList.add('animation2');
      content3.classList.add('animation3');
      content4.classList.add('animation4');
      content5.classList.add('animation5');
      content6.classList.add('animation6');
}
if(window.pageYOffset > 1700){
card[0].classList.add('card-flip');
card[1].classList.add('card-flip');
card[2].classList.add('card-flip');
}
}