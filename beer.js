function canBuyBeer(looksAsAge, hasId, ageFromId){
    if(looksAsAge >= 25 || hasId && ageFromId >= 18){
      return true;
    } else {
      return false;
    }
}

/*

code2flow.com

start;
if(ser ut som > 25){
  Får kjøpe øl;
} else {
  if(Ikke har legitimasjon){
    Får IKKE kjøpe øl;
  } else if(er under 18){
    Får IKKE kjøpe øl;
  } else {
    Får kjøpe øl;
  }
}
slutt;


start;
if(ser ut som > 25 || har legitimasjon && er over 18){
  Får kjøpe øl;
} else {
  Får IKKE kjøpe øl;
}
slutt;


*/