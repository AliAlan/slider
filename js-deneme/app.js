const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const deleteBtn = document.getElementById("delete");
const number = document.getElementById("number");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const product = document.querySelector(".product");
const fruit = document.querySelector("#fruit");
const price = document.querySelector("#price");
let images = [
  {
    image: "banana.png",
    fruitName: "banana",
    fruitPrice: "$10",
  },
  {
    image: "peach.png",
    fruitName: "peach",
    fruitPrice: "$12",
  },
  {
    image: "apple.png",
    fruitName: "apple",
    fruitPrice: "$6",
  },
  {
    image: "pineapple.png",
    fruitName: "pineapple",
    fruitPrice: "$9",
  },
  {
    image: "cherry.png",
    fruitName: "cherry",
    fruitPrice: "$8",
  },
];
let a = 0;
let b = "";
number.innerHTML = a;
increaseBtn.addEventListener("click", () => {
  number.innerHTML = a += 1;
});
decreaseBtn.addEventListener("click", () => {
  number.innerHTML = a -= 1;
  if (a < 0) {
    number.innerHTML = 0;
  }
});
deleteBtn.addEventListener("click", () => {
  number.innerHTML = a = 0;
});

let currentPage = 0;
let element = images[currentPage];
function showPages() {
  product.innerHTML = `<img src="${images[currentPage].image}"/>`;
  fruit.textContent = images[currentPage].fruitName;
  price.textContent = images[currentPage].fruitPrice;
}

next.addEventListener("click", () => {
  showPages();
  currentPage++;
  if (currentPage > images.length - 1) {
    currentPage = 0;
  }
});

prev.addEventListener("click", () => {
  showPages();
  currentPage--;
  if (currentPage < 0) {
    currentPage = images.length - 1;
  }
});
