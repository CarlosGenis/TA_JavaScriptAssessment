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
    return this.health;
  }
  attackOpponent(name){
    this.damage = 0;
    if(this.name == "bulbasaur"){
      this.damage = bulbasaur.attack - charmander.defense ; //attack of bulbasaur - charmander defense
      if (this.damage <= 0){ //all attacks must aleast do 1 damage
        this.damage = 1;
      }
      charmander.takeDamage(this.damage); //calls for function by calculated damage
      console.log("Current HP of charmander (after attack): ",charmander.health);
      return charmander.health;
    }
    else if (this.name == "charmander"){
      this.damage = charmander.attack - bulbasaur.defense ; // subtracts charmander attack - bulbasaur defense
      if (this.damage <= 0){ //all attacks must aleast do 1 damage
        this.damage = 1;
      }
      bulbasaur.takeDamage(this.damage);
      console.log("Current HP of bulbasaur (after attack) ", bulbasaur.health);
      return bulbasaur.health;
    }
  }
   display(){
    if (this.name == "pikachu"){
      this.name = this.name.toUpperCase();
      this.type = this.type.toUpperCase();
      this.partialHP = this.health;
      this.health = 25;
      console.log(this.name, '(',this.type,')', this.partialHP, '/', this.health );
      return ;
    }
    else if (this.name = "bulbasaur"){
      this.name = this.name.toUpperCase();
      this.type = this.type.toUpperCase();
      this.partialHP = this.health;
      this.health = 35;
      console.log(this.name, '(',this.type,')', this.partialHP, '/', this.health );
      return ;
    }
  }
}
const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
console.log("Name: ",charmander.name);    // charmander
console.log("Attack: ",charmander.attack);  // 12
console.log("Defense: ",charmander.defense); // 8
console.log("HP: ",charmander.health);  // 30
console.log("Type: ",charmander.type);    // fire
console.log(" ");
charmander.takeDamage(5); //calls function for charmander to be attacked and take damage
console.log("Current HP of charmander (after taking damage): ", charmander.health);
charmander.attackOpponent(bulbasaur);
pikachu.display();
pikachu.health = 12;
console.log(pikachu.health);
pikachu.display();
// Don't edit this line!
module.exports = Pokemon;
