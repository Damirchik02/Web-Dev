let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

delete user.age;

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

let user = {
    name: "John",
    age: 30,
}

// this would give a syntax error
user.likes birds = true

let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;

let user = {
    name: "John",
    age: 30
};  
let key = prompt("What do you want to know about the user?", "name");  
// access by variable
alert( user[key] ); // John (if enter "name")
  
let user = {
    name: "John",
    age: 30
};  
let key = "name";
alert( user.key ) // undefined

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
}  
let user = makeUser("John", 30);
alert(user.name); // John

function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
}

let user = {
    name,  // same as name:name
    age: 30
};

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};  
alert( obj.for + obj.let + obj.return );  // 6

let obj = {
    0: "test" // same as "0": "test"
};  
// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"

"key" in object

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let user = { age: 30 };
let key = "age";
alert( key in user ); // true, property "age" exists

let obj = {
    test: undefined
};  
alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist!

for (key in object) {
    // executes the body for each key among object properties
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};  
for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};  
for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // add one more  
// non-integer properties are listed in the creation order
for (let prop in user) {
    alert( prop ); // name, surname, age
}

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};  
for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
}

