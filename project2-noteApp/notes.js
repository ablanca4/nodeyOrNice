console.log('starting notes.js');
const fs = require('fs');


var getNoteArray = () => {
    var notes = [];
    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(err){
        var notesString = '[]';
    };

    return notes;
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
//adding an 'addNote' property to the notes.js module object. It is
//equal to a function that logs something and returns a string.
var addNote = (title, body) => {
    var noteArr = getNoteArray();
    var  note={
        title:title,
        body:body
    };
    
    // filter functions goes through each object of the array. Accepts a callback function that
    // runs once for every element in the array.
    var duplicateNotes = noteArr.filter((note)=>{
        return note.title === title;
    });

    var duplicateNotes = noteArr.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        noteArr.push(note);
        saveNotes(noteArr);
        return note;
    }

    
};

var getAll = () =>{
    var noteArr  = getNoteArray();

    noteArr.filter((note)=>console.log(note.title));
};

var getNote = (title) => {
    var noteArr  = getNoteArray();
    var gottenNoteArr = noteArr.filter((note)=> note.title===title);
    return gottenNoteArr[0];
    
};

var removeNote = (title) => {
    var noteArr  = getNoteArray();
    
    var newNotesArray = noteArr.filter((note) => note.title !==title);

    saveNotes(newNotesArray);
    return newNotesArray.length !== noteArr.length;
};

var logNote = (note) => {
    console.log('--');
    console.log('title: '+note.title);
    console.log('body: '+note.body);
}

module.exports = {
    // adding an 'addNote attribute to the exports part of note.js and setting it to the addNote
    // function defined above.
    addNote: addNote, // in es6 can just put addNote instead of addNote: addNote
    getAll: getAll,
    removeNote: removeNote,
    getNote: getNote,
    logNote: logNote
};
