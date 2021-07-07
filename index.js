/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function PersonEat(someFood){

    if (this.stomach.length != 10){
    this.stomach.push(someFood);
    }else{
      `${this.name} is full. ${this.name} needs to poop first, if you want ${this.name} to eat more.`
    }
}

Person.prototype.poop = function PersonPoop(){
   this.stomach.splice(0, this.stomach.length);
}

Person.prototype.toString = function PersonToString(){
 return `${this.name},${this.age}`;
}


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/


function Car(model, milesPerGallon) {
  this.model = model ; 
  this.milesPerGallon = milesPerGallon = milesPerGallon;
  this.tank = tank = 0;
  this.odometer = odometer = 0;
  }
  
  
  Car.prototype.fill = function CarFill(gallons){
    this.tank = gallons + this.tank;
  }
  
  
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/





function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

  Baby.prototype = Object.create(Person.prototype) // Need this access methods and other parts of the class

Baby.prototype.play = function(){
  return `Play with ${this.favoriteToy}`
}




/* 
  TASK 4


  In your own words explain the four principles for the "this" keyword below:
  
  The four rules presented for determining what 'this' in JavaScript points to boil down to one simple question: What is the calling object?


1. Is the function called by new?
2. Is the function called by .call(), .apply(), or .bind()?
3. Is the function called as a method, ie: obj.func()?
4. Is the function called in the global scope?
    If strict mode is enabled, return undefined.
    Otherwise, return the global object, ie: window.



    By Example:


    1. Global Binding: 
          Is the function called in the global scope?
          If strict mode is enabled, return undefined.
          Otherwise, return the global object, ie: window/console.log() object

          Example: 
              function sayName(name){
                 console.log(this)
                    return name;
              } 

                sayName("jcork4real");

    2.  Implicit Binding:
           Is the function called as a method, ie: obj.func()?

           Whenever a function is called by a preceding dot, the object left of the dot gets 'this'

           Example:

                    const myObj = {
                      greeting: 'Hello',
                      sayHello: function(name){
                        console.log(`${this.greeting} my name is ${name});
                        console.log(this)
                      }
                    };
                        myObj.SayHello('Ryan')


    3.    New Binding: 
                Is the function called by new?
            
              Example:
                        function CordialPerosn(greeter){
                          this.greeting = 'Hello';
                          this.greeting = greeter; 
                          this.speak = function(){
                            console.log(this.greeting + this.greeter);
                          };
                        }

                        const jerry = new CordialPerson('Newman');
                        const newman = new CordialPerson('Jerry');

                    Whenever a constructor function is used, this referes to the specific instance of the object that is
                    created and is returned by the constructor function.

    4.   Explicit Binding: 
              Is the function called by .call(), .apply(), or .bind()?

              const jerry = new CordialPerson('Newman');
              const newman = new CordialPerson('Jerry');

              jerry.speak.call(newman);
              newman.speak.apply(jerry);

              newman.speak();
              jerry.speak();


          Wehnever JavaScripts call or apply method is used, this is explicitly defined.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
