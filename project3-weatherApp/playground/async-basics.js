console.log('Starting app');

// the setTimeout function is an async function.
// meaning it doesn't block the execution of the program
// This is an example of non-blocking I/O
//accepts a callback function, as well as a time.
setTimeout(()=>{
    console.log('Inside Callback');
}, 2000);

setTimeout(()=>{
    // even though this has a 0 ms delay, it will still
    // be ran after all the sync functions.
    console.log('inside second callback, with 0 ms delay');
},0);

console.log('Finishing up');

/* OUTPUT
Starting app
Finishing up
inside second callback, with 0 ms delay
Inside Callback
*/