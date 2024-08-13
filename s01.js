function getCharacters(obj, key, val) {
  var foundCharacters = [];
  // Insert fun here
  
   val = val.toLowerCase();
  
  for (let i=0; i<obj.characters.length;i++) {
    var chara = obj.characters[i];
    if(chara.hasOwnProperty(key)) {
      if(chara[key].toLowerCase() === val) {
        foundCharacters.push(chara)
      }
    }
  }
  
  return foundCharacters;
}
