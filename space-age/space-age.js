
const anosDaTerraEmSegundos = 31557600;

export const age = (planeta,segundosTotais) => {
 var factor;
if(planeta == "earth"){
  factor = 1.0;
  
}

if(planeta == "mercury"){
  factor = 0.2408467;
 
}
if(planeta == "venus"){
  factor = 0.61519726;

}
if(planeta == "mars"){
 factor = 1.8808158;

}
if(planeta == "jupiter"){
 factor = 11.862615;

}
if(planeta == "saturn"){
 factor = 29.447498;

}
if(planeta == "uranus"){
 factor = 84.016846;
 
}
if(planeta == "neptune"){
 factor = 164.79132;
 
}
var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos terrestres
 return (parseFloat(anosPlaneta.toFixed(2))); //retornando os anos terrestres

};


// Método .toPrecision(x), força os algirismos significativos em x casas decimais em strings
// parseFloat, transformando a string anterior em número (float)
// + , é a mesma função do parseFloat
