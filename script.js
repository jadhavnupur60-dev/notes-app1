let notes = [];

const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const notesList = document.getElementById("notesList");

function displayNotes() {
    notesList.innerHTML = "";

    notes.forEach(function (note) {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${note.text}</span>
            <button onclick="editNote(${note.id})">Edit</button>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;

        notesList.appendChild(li);
    });
}

addButton.addEventListener("click", function () {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please write a note.");
        return;
    }

    notes.push({
        id: Date.now(),
        text: text
    });

    noteInput.value = "";
    displayNotes();
});

function editNote(id) {
    const note = notes.find(function (item) {
        return item.id === id;
    });

    const newText = prompt("Edit your note:", note.text);

    if (newText !== null && newText.trim() !== "") {
        note.text = newText.trim();
        displayNotes();
    }
}

function deleteNote(id) {
    notes = notes.filter(function (note) {
        return note.id !== id;
    });

    displayNotes();
}