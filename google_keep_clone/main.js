const addButton = document.querySelector(".addnotes");
const notes = document.querySelector(".notes");
const updateLSData = ()=>{
const textAreaData =document.querySelectorAll('textarea');
const notes = [];
console.log(notes)
textAreaData.forEach((note)=>{
return notes.push(note.value);
})
console.log(notes)
localStorage.setItem("notes",JSON.stringify(notes));
}

const addNewNote = (text = '' ) =>{
const note = document.createElement('div');//to create div
note.classList.add('note');//to add class
const htmlData = `
<div class="opretion"><i class=" edit fas fa-pen-nib"></i> <i class="delete far fa-trash-alt"></i></div>
<div class='main ${text ? "":'hidden'}'></div>
<textarea cols="30" rows="15"  class="text ${text ? 'hidden ':''}"></textarea>
`
note.insertAdjacentHTML('afterbegin',htmlData)//INSAERT  HTML INTO CREATED DIV
//getting refrence
const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv= note.querySelector('.main');
const textarea = note.querySelector('textarea');
//delete the node
delButton.addEventListener('click',() =>{note.remove();})
textarea.value = text;
mainDiv.innerHTML=text;
editButton.addEventListener('click',()=>{
mainDiv.classList.toggle("hidden");
textarea.classList.toggle("hidden");
})
textarea.addEventListener('change',(event)=>{
const value = event.target.value;
mainDiv.innerHTML=value;
updateLSData();

})
notes.appendChild(note);//TO ADD CHILD PARTICULAR CLASS
}
const notess = JSON.parse(localStorage.getItem("notes"));

if(notess){notess.forEach((note) => addNewNote(note))};
addButton.addEventListener("click",() =>addNewNote());