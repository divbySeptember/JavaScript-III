* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

CharacterStats.prototype = Object.create(GameObject.prototype);
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  this.destroy = function () {
    let destroyed = `Object was removed from the game`;
@@ -33,91 +34,94 @@ function GameObject(attributes) {
}

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.name = attributes.name;
  this.healthPoints = attributes.healthPoints;
  this.takeDamage = function () {
    let tookDamage = `Object-name took damage`;
    let tookDamage = `${this.name} took damage`;
    return tookDamage;
  };
}

function Date(attributes) { // This doesn't work yet
  this.createdAt = attributes.createdAt;
}

function Humanoid(attributes) {
  this.name = attributes.name;
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  this.dimensions = attributes.dimensions;
  this.healthPoints = attributes.healthPoints;
  this.greet = function () {
    let greeting = `Hello, my name is ${this.name} (spoken in ${this.language})`;
    return greeting;
  };
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
function Villian(attributes) {
  Humanoid.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  this.hp = function () {
    let greeting = `Hello, my name is ${this.name} (spoken in ${this.language})`;
    return greeting;
  };
}

const mage = new Humanoid({
  name: 'Bruce',
  team: 'Mage Guild',
  healthPoints: 5,
  language: 'Common Tongue',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  // createdAt: new Date(),
  healthPoints: 5,
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
  createdAt: new Date(),
});


const swordsman = new Humanoid({
  name: 'Sir Mustachio',
  team: 'The Round Table',
  // createdAt: new Date(),
  healthPoints: 15,
  language: 'Common Tongue',
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
  createdAt: new Date(),
});


const archer = new Humanoid({
  name: 'Lilith',
  team: 'Forest Kingdom',
  // createdAt: new Date(),
  healthPoints: 10,
  language: 'Elvish',
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
  createdAt: new Date(),
});



console.log(mage); 
console.log(mage.name); 
console.log(mage.greet());
console.log(mage.weapons);
console.log(mage.createdAt); // doesn't work
console.log(mage.createdAt);   
console.log(swordsman.dimensions); 
console.log(swordsman.healthPoints); 
console.log(swordsman.team);
@@ -127,7 +131,11 @@ console.log(archer.greet());
console.log(mage.takeDamage()); 
console.log(swordsman.destroy()); 

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods! 
// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!