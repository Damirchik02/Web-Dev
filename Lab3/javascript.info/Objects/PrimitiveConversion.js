// output
alert(obj);
// using object as a property key
anotherObj[obj] = 123;

// explicit conversion
let num = Number(obj);
// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;
// less/greater comparison
let greater = user1 > user2;

// binary plus uses the "default" hint
let total = obj1 + obj2;
// obj == number uses the "default" hint
if (user == 1) { ... };

obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
};

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};  
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let user = {name: "John"};
alert(user); // [object Object]
alert(user.valueOf() === user); // true

let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
};  
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
};  
alert(user); // toString -> John
alert(user + 500); // toString -> John500

let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
};  
alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

let obj = {
    toString() {
      return "2";
    }
};  
alert(obj + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation

