
const anosDaTerraEmSegundos = 31557600;

export const age = (planeta,segundosTotais) => {
if(planeta == "earth"){
  var factor = 1.0
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos terrestres
  return parseFloat(anosPlaneta.toPrecision(4)); //retornando os anos terrestres
}

if(planeta == "mercury"){
  var factor = 0.2408467
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em mercúrio
  return parseFloat(anosPlaneta.toPrecision(5)); //retornando os anos em mercúrio
}
if(planeta == "venus"){
  var factor = 0.61519726
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em vênus
  return parseFloat(anosPlaneta.toPrecision(3)); //retornando os anos em vênus
}
if(planeta == "mars"){
  var factor = 1.8808158
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em marte
  return parseFloat(anosPlaneta.toPrecision(4)); //retornando os anos em marte
}
if(planeta == "jupiter"){
  var factor = 11.862615
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em júpiter
  return parseFloat(anosPlaneta.toPrecision(3)); //retornando os anos em júpiter
}
if(planeta == "saturn"){
  var factor = 29.447498
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em saturno
  return parseFloat(anosPlaneta.toPrecision(3)); //retornando os anos em saturno
}
if(planeta == "uranus"){
  var factor = 84.016846
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em urano
  return +(anosPlaneta.toPrecision(2)); //retornando os anos em urano
}
if(planeta == "neptune"){
  var factor = 164.79132
  var anosPlaneta = (segundosTotais/(anosDaTerraEmSegundos))/factor; // Indicando quantos anos em netuno
  return +(anosPlaneta.toPrecision(2)); //retornando os anos em netuno
}

};


// Método .toPrecision(x), força os algirismos significativos em x casas decimais em strings
// parseFloat, transformando a string anterior em número (float)
// + , é a mesma função do parseFloat
