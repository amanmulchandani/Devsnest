let totalseats = 25
let seats = 0

for (let index = 0; index < totalseats; index++) {
    const seatelement = document.createElement("div");
    seatelement.innerHTML = `<p class="button">🪑 : ${index} open</p>`;
    seatelement.setAttribute('id',index);
    seatelement.setAttribute('class',"seat");
    document.getElementById('seats').insertAdjacentElement('beforeend',seatelement);
};

Array.from(document.querySelectorAll(".seat")).forEach((element,index) => {
    element.addEventListener("click", (x) => {
        let result = element.children[0].classList.toggle('is-warning');
        if (result) {seats++ ; element.children[0].innerHTML='booked 😊' ;}
        else {seats-- ; element.children[0].innerHTML= `🪑 : ${element.id} open`;}
        document.querySelector("#booked").innerHTML = "Booked Seats : " + seats;
        const remaining = document.querySelector("#remaining").innerHTML =  `Remaining Seats : ${totalseats - seats}`;
    }); 
});