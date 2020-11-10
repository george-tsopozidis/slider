const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);

right.addEventListener("click", (e) => {
  e.preventDefault();
  let currentRight = parseInt(computedStyles.right);

  if (currentRight < 500) {
    items.style.right = currentRight + 100 + "px";
  }
});


left.addEventListener("click", (e) => {
  e.preventDefault();
  let currentRight = parseInt(computedStyles.right);

  if (currentRight > 0) {
    items.style.right = currentRight - 100 + "px";
  }
});