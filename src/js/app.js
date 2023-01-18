import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  // const Hotproducts = document.querySelector('subtitle is-6 price hot');

  let prices = document.querySelectorAll('.price');
  console.log(prices);

  // const Span=document.querySelector(".hot");
  // const price=Span.textContent;

  prices.forEach(element => {    if(element.classList.contains('hot')) {element.innerHTML += '🔥';}  });
  
  






});
