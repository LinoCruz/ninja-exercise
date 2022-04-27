class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("the name of the ninja is: " + this.name);
  }

  showStats() {
    console.log(
      "The ninja " +
        this.name +
        " has: - strenght:" +
        this.strength +
        " - speed: " +
        this.speed +
        " - health: " +
        this.health
    );
  }

  drinkSake() {
    this.health += 10;
  }
}
//test
const ninja1 = new Ninja("Lino", 100);
ninja1.drinkSake();
console.log(ninja1.health);
ninja1.showStats();
ninja1.sayName();

//Super Ninja
class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log("First, solve the problem. Then, write the code.");
  }
}

//Test 2
console.log("---------------");
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
