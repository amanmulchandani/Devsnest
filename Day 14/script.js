let one = document.getElementById("button-one");
let two = document.getElementById("button-two");
let three = document.getElementById("button-three");

one.addEventListener("click", () =>{
    one.innerHTML = "CLICKED!";
})

two.addEventListener("click", () =>{
    two.classList.toggle("button-style")
})