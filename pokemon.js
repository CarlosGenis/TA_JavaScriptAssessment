// Your code here!
class Pokemon {
  constructor(name,attack,defense,health,type){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;
  }
  takeDamage(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
    if (this.health < 0 ){ //if the health is negative then set to 0
      this.health = 0;
    }
    console.log(charmander.health);
    return this.health;
  }
  attackOpponent(name){
    
  }
}
const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
console.log(charmander.name);    // charmander
console.log(charmander.attack);  // 12
console.log(charmander.defense); // 8
console.log(charmander.health);  // 30
console.log(charmander.type);    // fire
charmander.takeDamage(5);
// Don't edit this line!
module.exports = Pokemon;
