const noteListDiv = document.querySelector(".note-list");

// get item from storage
function getDataFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
}

// add a new note in the list
let noteId = 1
let note = {
    noteId: noteId,
    title: '',
    content: ''
}
const addNewNote = () => {
    const noteTitle = document.getElementById("note-title").value;
    const noteContent = document.getElementById("note-content").value;
    if (validateInput(noteTitle, noteContent)) {
        let notes = [];
        notes = getDataFromStorage();
        if (notes.length) {
            let lastNote = notes[notes.length - 1];
            noteId = lastNote.noteId + 1;
        }
        console.log(noteId);
        note.title = noteTitle;
        note.content = noteContent;
        note.noteId = noteId;
        notes.push({...note});
        console.log(notes);
        createNote(note);
        // saving in the local storage
        localStorage.setItem("notes", JSON.stringify(notes));
        noteTitle.value = "";
        noteContent.value = "";
    }
}

//  input validation
function validateInput(title, content) {
    if (title.value !== "" && content.value !== "") {
        return true;
    } else {
        if (title.value === "") title.classList.add("warning");
        if (content.value === "") content.classList.add("warning");
    }
    setTimeout(() => {
        title.classList.remove("warning");
        content.classList.remove("warning");
    }, 1600);
}

// create a new note div
function createNote(noteItem) {
    const div = document.createElement("div");
    div.classList.add("note-item");
    div.setAttribute("data-id", noteItem.id);
    div.innerHTML = `
        <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p>
        <button type = "button" class = "btn delete-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Delete
        </buttton>
        <button type = "button" class = "btn edit-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Edit
        </buttton>
  `;
    noteListDiv.appendChild(div);
}

// display all the notes from the local storage
function displayNotes(){
    let notes = getDataFromStorage();
    if(notes.length > 0) {
        noteId = notes[notes.length - 1].id;
        noteId++;
    }else {
        noteId = 1;
    }
    notes.forEach(item => {
        createNote(item);
    });
}
// delete a note
/*
function deleteNote(e){
    if (e.target.classList.contains("delete-note-btn")) {

        e.target.parentElement.remove();
        let divID = e.target.parentElement.dataset.id;
        let notes = getDataFromStorage();
        let newNotesList = notes.filter(item => {
            return item.id !== parseInt(divID);
        });
        localStorage.setItem("notes", JSON.stringify(newNotesList));
    }
}
*/
// delete all notes
/*
function deleteAllNotes(){
    localStorage.removeItem("notes");
    let noteList = document.querySelectorAll(".note-item");
    if(noteList.length > 0){
        noteList.forEach(item => {
            noteListDiv.removeChild(item);
        });
    }
    noteId = 1 //resetting noteId to 1
}*/
// Add eventListeners
// document.addEventListener("DOMContentLoaded", displayNotes);
document.getElementById("add-note-btn").addEventListener("click", addNewNote);
// noteListDiv.addEventListener("click", deleteNote);
// document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);

