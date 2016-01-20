'use strict';

var x = 1;

function doubleIt(x) {
    x = x * 2;
}

doubleIt(x);
console.log(x);

var name = 'Dave';

//closer technique, when you return a function frm a fuction, that function has access to all the stack varaibles 
function getHello(name) {
    return function() {
        console.log(name);
    }
}

var sayHello = getHello(name);
name = 'Fred';
sayHello();

//restart vagrant vm -> exit, vagrant halt, vagrant up, vagrant destroy