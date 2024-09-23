let addbtn = document.querySelector("#add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

addbtn.addEventListener("click", function() {
    if (inp.value.trim() === "") { 
        alert("Please enter a task."); 
        return; 
    }
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("order");

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete", "btn",  "btn-dark");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = ""; 
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName = "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});