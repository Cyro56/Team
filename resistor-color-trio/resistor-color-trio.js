
export class ResistorColorTrio {
  constructor(...color) {
    this.color = color[0];  //definindo color
        
     
};


  get label() {
    var lista = {
      black:0,
      brown:1,
      red:2,
      orange:3,
      yellow:4,
      green:5,
      blue:6,
      violet:7,
      grey:8,
      white:9
    };
    var valores = +('' + lista[this.color[0]] + lista[this.color[1]]);    //definindo os valores
     
    var math = 10**(lista[this.color[2]])*valores;               
    if (Number.isNaN(math)) throw new Error('invalid color');   //usando o Number.isNaN para determinar se esta retornando ou não um número
    var b = "Resistor value: " + math + " ohms";           
    var c = "Resistor value: " + (math/1000) + " kiloohms";
    
    

    if( math > 0 && math <= 999){  //valores com menos de três dígitos
      return b;
    }
    else if(math > 999){     // valores com mais de três dígitos
      return c;
    }

 
 
    
  }
};
