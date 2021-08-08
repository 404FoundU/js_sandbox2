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
        let notes = getDataFromStorage();
        if (notes.length ) {
            let lastNote = notes[notes.length - 1];
            noteId = lastNote.noteId + 1;
        }

        note.title = noteTitle;
        note.content = noteContent;
        note.noteId = noteId;
        notes.push({...note});
        createNote(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteTitle.value = "";
        noteContent.value = "";
    }
}
const saveNote = (e) => {
    document.getElementById("save-note-btn").hidden= true
    document.getElementById("add-note-btn").hidden= false
    addNewNote();
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
    div.setAttribute("data-id", noteItem.noteId);
    div.innerHTML = `
        <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p>
        <button type = "button" class = "btn edit-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Edit
        </buttton>
        <button type = "button" class = "btn delete-note-btn">
        <span><i class = "fas fa-trash"></i></span>
        Delete
        </buttton>
        
  `;
    noteListDiv.appendChild(div);
}

// display all the notes from the local storage
function displayNotes() {
    let notes = getDataFromStorage();
    if (notes.length > 0) {
        noteId = notes[notes.length - 1].noteId;
        noteId++;
        notes.forEach(item => {
            createNote(item);
        });
    }
}

// delete a note
const editNote = (e) => {
    if (e.target.classList.contains("edit-note-btn")) {
        let id = parseInt(e.target.parentElement.dataset.id)
        let notes = getDataFromStorage();
        let newNotes = notes.map(item => {
            if (item.noteId === id) {
                document.getElementById("note-title").value = item.title;
                document.getElementById("note-content").value = item.content;
                document.getElementById("save-note-btn").hidden= false
                document.getElementById("add-note-btn").hidden= true
            }
        });
        // localStorage.clear();
        deleteNote(e);
    }
}
const deleteNote = (e, id = 0) => {
    if (e.target.classList.contains("delete-note-btn")) {
        e.target.parentElement.remove();
        if (id === 0) {
            id = parseInt(e.target.parentElement.dataset.id);
        }
        let notes = getDataFromStorage();
        let newNotes = notes.filter(item => {
            return item.noteId !== id;
        });
        localStorage.setItem("notes", JSON.stringify(newNotes));
    }
}
// Add eventListeners
document.addEventListener("DOMContentLoaded", displayNotes);
document.getElementById("add-note-btn").addEventListener("click", addNewNote);
document.getElementById("save-note-btn").addEventListener("click", saveNote);
noteListDiv.addEventListener("click", deleteNote);
noteListDiv.addEventListener("click", editNote);
// document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);

