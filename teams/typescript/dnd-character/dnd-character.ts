export class DnDCharacter {
  list: number[]; 
  static list: number[];


  strength : number;
  dexterity : number;
  constitution  : number;
  intelligence : number;
  wisdom : number;
  charisma : number;
  hitpoints : number;

  constructor(){
    this.list = DnDCharacter.list
    

    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10+DnDCharacter.getModifierFor(this.constitution);
   
   
  }
  


  public static generateAbilityScore(): number {
    this.list = [];    
    for (let index = 0; index < 4; index++) {
      this.list.push(Math.floor(Math.random()*7));      
    }    
    var minimo = Math.min(...this.list);
    var indice = this.list.indexOf(minimo)
    this.list.splice(indice,1)
    var sum = 0;

    for(let numero of this.list){
      sum += numero
    }   
      return sum
    
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2) 
  }
}
