// Animal class
class Animal {
  constructor(species) {
    this._species = species;  // _species is a private property
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Dog class extending Animal
class Dog extends Animal {
  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

// Example usage:

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
