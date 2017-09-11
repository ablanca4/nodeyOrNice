// example of callback functions

/*
 * Parameters: 
 *  id (number)
 *  callback (Function)
*/
var getUser = (id,callback)=>{
    var userObj = {
        id: id,
        name: 'Aaron'
    };
    //simulating DB read
    setTimeout(()=>{
        callback(userObj);
    },3000);
};

getUser(31, (user)=>{
    console.log(user);
});
console.log('Stuff at end of file');