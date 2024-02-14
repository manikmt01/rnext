const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');

const productPrice = 5000;
let totalPrice = 0;

// insiialy product price
price.innerText = ` ৳ ${productPrice}`;

total.innerText = `Total: ৳ ${totalPrice}`;

button.addEventListener('click', () => {
  totalPrice += productPrice;
  total.innerText = `Total: ৳ ${totalPrice}`;
});
