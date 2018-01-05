var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isGray = false;

// button.addEventListener("click", function() {
//   if(isGray){
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "gray";
//   }
//   isGray = !isGray;
// })

button.addEventListener("click", function() {
  document.body.classList.toggle("gray");
})
