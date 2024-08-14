// return an array of strings, every string being part of text no longer than max
function splitText(text, max) {
  // good luck
  if(!text) return [];
  let result = [];
  let last = 0;

  for (let i=0; i<text.length;i++) {
    if(text[i] == ' ') last = i;
    if(i == max) {
      result.push(text.slice(0, last));
      text = text.slice(last+1)
      i = 0;
    }
  }
  
  result.push(text);
  return result
}
