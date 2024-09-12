console.groupCollapsed("Reference");
console.log(
  "Image book",
  "https://www.nobleobjects.com/cdn/shop/articles/WarPeace_1-300391_1024x1024.jpg?v=1605747682"
);
console.groupEnd();

document.addEventListener("click", (e) => {
  if (e.target.matches(".card")) {
    e.target.classList.toggle("switch");
  }
});
