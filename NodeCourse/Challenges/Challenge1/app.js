/**
 * This challenge, you are to create a seperate js file called notes.js and make it export a 
 * function that adds 2 parameters together. 
 * 
 * Then call the newly made 'add' function from app.js and print the result onto the screen.
 */

 const notesMod = require('./notes.js');

 const sum = notesMod.add(7,10);

 console.log('the result is: '+sum);