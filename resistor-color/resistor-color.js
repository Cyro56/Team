//export const colorCode = (color) => {
  //return COLORS.findIndex(c => c === color);
//};
//export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; //solução Ótima (Giu)



export const colorCode = (color) => {
  if(color == "black"){
    return 0;
  }
  if(color == "brown"){
    return 1;
  }
  if(color == "red"){
    return 2;
  }
  if(color == "orange"){
    return 3;
  }
  if(color == "yellow"){
    return 4;
  }
  if(color == "green"){
    return 5;
  }

  if(color == "blue"){
  return 6;
  }
  if(color == "violet"){
  return 7;
}
if(color == "grey"){
  return 8
}
if(color == "white"){
  return 9
}

};
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

