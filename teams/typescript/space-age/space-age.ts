
function earth_years(segundos:number):number{
  return Number((segundos/31557600).toPrecision(4))
}

export function age(planet: string, seconds: number): number{
  return earth_years(seconds)/planet_Period[]

}

const planet_Period = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}