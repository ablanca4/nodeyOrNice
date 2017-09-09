const _ = require('lodash');
const yargs = require('yargs');
//pulling in the notes.js into the app.js and setting it to notes var.
const notes = require('./notes.js');

// process.argv array of all cmd line arguments passed in node app.js foo bar
// returns 
// [ '/usr/local/bin/node',
// '/Users/aaronblancaflor/Desktop/NodeCourse/project2-noteApp/app.js',
// 'foo',
// 'bar' ]
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'the body of the note',
    demand: true,
    alias: 'b' 
 };
// grabbing all the command line arguments sing yargs
var yargArgv = yargs.
command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'lists all of the notes')
.command('read', 'Read a note',{
    title: titleOptions
})
.command('remove','Deletes a note',{
    title: titleOptions
})
.help()
.argv;
var command = yargArgv._[0];


if (command==='add'){
    var note = notes.addNote(yargArgv.title, yargArgv.body);
    if (note){
        notes.logNote(note);
    }else{
        console.log('Title taken')
    }
}else if(command==='list'){

    var allNotes = notes.getAll();
    allNotes.forEach((note)=> {
        notes.logNote(note);
    });
}else if(command==='read'){
    var readNote = notes.getNote(yargArgv.title);
    if(readNote){
        notes.logNote(readNote);
    }else{
        console.log('cannot find note');
    }
}else if(command==='remove'){
    var removed = notes.removeNote(yargArgv.title);
    if(removed){
        console.log('successfully removed note: ' + yargArgv.title);
    }else{
        console.log('Note could not be fount');
    }
}else{
    console.log('Command not recognized.');
}




