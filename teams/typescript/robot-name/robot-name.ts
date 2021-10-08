
export class Robot {  
  private readonly list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  private static nomes = new Set<string>();

  private $name:string = "";  
  constructor() {
    this.resetName();  
    
  }
  private generateName(): string {   
    let concate = "";
    let digits  = "";   
    for (let index = 0; index < 2; index++){
      concate += this.list[Math.floor(Math.random()*26)];      //error: está ocasionamente acessando valores inexistentes       
    }
    for (let index = 0; index < 3; index++){
      digits += Math.floor(Math.random()*10);            
    }
    return concate + digits;
    
  }

  public get name(): string {
    return this.$name   
  }
  
  public resetName():void {
    var new_randon = this.generateName();    
    while(Robot.nomes.has(new_randon)){
      new_randon = this.generateName();    
    }
    Robot.nomes.add(new_randon); 
    this.$name = new_randon;  
  }

  public static releaseNames():void{
    Robot.nomes.clear();        
  }
}
