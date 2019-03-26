console.log("monkey.js loaded");
/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).


 var myMotorcycle = {
    wheels: 2,
    color: "blue",
    maxSpeed: 300,
    owners: ["Tedi", "Ena"]
  }

*/

var monkey = function (name, species) {
    
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
}
monkey.prototype.eatSomthing = function (food){
    this.foodsEaten.push(food);
}

var monkey1 = new monkey('jhon', 'gorilla');
var monkey2 = new monkey('marc', 'chmpazy');
var monkey3 = new monkey('sami', 'altaif');

monkey1.eatSomthing('panana');
monkey1.eatSomthing('apple');
console.log(monkey1);

