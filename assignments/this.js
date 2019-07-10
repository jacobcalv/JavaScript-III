/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when you are in the global scope if you use the .this keyword it will be the input you put in the console.log will be the "this"
* 2. when an object is called, the object before the dot is the "this" keyword. 
* 3. an object is created and returned by the constructor function that returns the object
* 4. explict binding can force the object to use a certian object without putting it within the original object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var exFunction = function() { 
    console.log(this.test);
}

var test = 'hey';
exFunction();

// Principle 2

// code example for Implicit Binding
var ex2Func = function(){
    console.log(this.realLastName)
}

var mySecretInfo = {
    realName: 'Shrek',
    realLastName: 'Swamp-Breath',
    ex2Func: ex2Func
}

mySecretInfo.ex2Func();
////////////////////////////////////////////

const jacob = {
    occupation: 'Walmart',
    message: function (day) {
        return 'It is ' + day + ' today. Have a great day at ' + this.occupation;  
    }
}

console.log(jacob.message("Tuesday"));

// Principle 3

// code example for New Binding
function NameSwap(name, taunt) {
    this.name= name;
    this.newName = 'mr. robot';
    this.taunt = taunt;
    this.speak = function () {
        return `Sorry ${this.name} your new name is ${this.newName}. ${this.taunt}`
    }
}

const swampBreathSwap = new NameSwap('Swamp Breath','LOL!');
const jacobSwap = new NameSwap('Jacob','HaHa');
console.log(swampBreathSwap.speak());
console.log(jacobSwap.speak())



// Principle 4

// code example for Explicit Binding
function goodbye() {
    name = 'joe';
    console.log(`Have yourself a good night ${this.name}`)
}

var theHuman = {
    name: "mr. robot"
}

goodbye.call(theHuman);

// function goodbye2() {
//     name = 'joe';
//     console.log(`Have yourself a good night ${this.name}`)
// }

// var theHuman = {
//     name: "mr. robot"
// }

// goodbye2.apply(theHuman);
