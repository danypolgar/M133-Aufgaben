


function addTodo() {

   var content = document.getElementById("input").value;
    if(content !== null) {
        let label = document.createElement("label");
        label.textContent = content;
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onchange", "setDone(this)");
        checkbox.onclick = setDone(checkbox, label);
        let br = document.createElement('br');
        let body = document.getElementById("body");
            body.appendChild(br);
            body.appendChild(label);
            label.appendChild(checkbox);
    }
}

function setDone(element) {
    if (element.parentElement !== null){
        element.checked ? element.parentElement.style.textDecoration = "line-through" : element.parentElement.style.textDecoration = "none";
    }
}
