// here we display input-text 

const notesContainer = document.querySelector(".input-box");

const creteBtn = document.querySelector(".btn");

// we add multiple p tag with the help of className input-text thatswhy here using querySelectorAll
let notes = document.querySelectorAll(".input-text");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// to store ntoes in browser. means when you refress your website it cannot remove
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// when you want to crete any by clicking on button every time then use addEventListener

creteBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className = 'input-text';
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Assets/icons8-delete-50.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// for delete 
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-text");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})