
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.NotesManager = factory();
    }
})(typeof self !== "undefined" ? self : this, function () {
    function addNote(notes, text) {
        if (!text || !text.trim()) {
            return notes;
        }

        return [
            ...notes,
            {
                id: Date.now(),
                text: text.trim()
            }
        ];
    }

    function editNote(notes, id, newText) {
        if (!newText || !newText.trim()) {
            return notes;
        }

        return notes.map(function (note) {
            return note.id === id
                ? { ...note, text: newText.trim() }
                : note;
        });
    }

    function deleteNote(notes, id) {
        return notes.filter(function (note) {
            return note.id !== id;
        });
    }

    return { addNote, editNote, deleteNote };
});