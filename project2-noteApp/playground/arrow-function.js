var square = (number) => {
    return number * number;
};
// this is the same as the above function. 
var altSquare = (number) => number * number;
console.log(square(9));

var user = {
    name: 'Aaron',
    sayHi: () => {
        console.log(arguments) // returns the global arguments
        console.log(`Hi. I'm ${this.name}`); // no this keyword. so returns undefined.
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`)
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);