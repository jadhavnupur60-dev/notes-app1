const {
    addNote,
    editNote,
    deleteNote
} = require("../node");

describe("Notes App Operations", () => {

    test("adds a new note", () => {
        const notes = [];
        const result = addNote(notes, "MCA Assignment");

        expect(result).toHaveLength(1);
        expect(result[0].text).toBe("MCA Assignment");
    });

    test("edits an existing note", () => {
        const notes = [{ id: 1, text: "Old note" }];
        const result = editNote(notes, 1, "Updated note");

        expect(result[0].text).toBe("Updated note");
    });

    test("deletes an existing note", () => {
        const notes = [
            { id: 1, text: "First note" },
            { id: 2, text: "Second note" }
        ];

        const result = deleteNote(notes, 1);

        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);
    });

    test("does not add an empty note", () => {
        const result = addNote([], "   ");

        expect(result).toHaveLength(0);
    });

    test("does not replace a note with empty text", () => {
        const notes = [{ id: 1, text: "Original note" }];
        const result = editNote(notes, 1, " ");

        expect(result[0].text).toBe("Original note");
    });

});