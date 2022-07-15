/*
-----Nested-----
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
*/

/*
-----Closure-----

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  //returns func
  return inner;
}
// get func to run
const fn = outer();
fn();
fn();
*/

/*
-----Function Currying-----

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

// sum(1,2,3) sum(1)(2)(3)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const currySum = curry(sum);
console.log(currySum(1)(2)(3));

const add1 = currySum(1);
const add2 = add1(2);
const add3 = add2(3);
console.log(add3);*/

/*
-----this-----

//implicit binding
const person = {
  name: "Enes",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
};
// person.sayMyName()

//explicit binding
function sayMyName() {
  console.log(`my name is ${this.name}`);
}
//sayMyName.call(person);

//new binding
function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("zort");
const p2 = new Person("zart");
//console.log(p1.name, p2.name);

//default binding
const name = "zorlama";
globalThis.name = name;
sayMyName();*/

/*
-----Prototype-----

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

function SuperHero(fName, lName) {
  //this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("hazırsa batman alır");
};
SuperHero.prototype = Object.create(Person.prototype);
const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());

//const person1 = new Person("lando", "norris");
//const person2 = new Person("george", "russell");
//console.log(person1.getFullName());
//console.log(person2.getFullName());*/

/*
-----Class-----

class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

//const classP1 = new Person("Bruce", "Wayne");
//console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("hazırsa batman alır");
  }
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.sayMyName());*/

/*
-----Iterables and Iterators-----*/

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};
/*
for (const word of obj) {
  console.log(word);
}*/

function* generatorFun() {
  yield "Hello";
  yield "World";
}
const genObj = generatorFun();

for (const word of genObj) {
  console.log(word);
}
