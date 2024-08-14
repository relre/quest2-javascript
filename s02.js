function splitText(text, max) {
  if(!text.length) return [];
  let result = [];
  let last = 0;
  for(let i = 0; i < text.length; i++) {
    if(text[i] == " ") { last = i; }
    if(i == max) {
      result.push(text.slice(0, last));
      text = text.slice(last+1);
      i = 0;
    }
  }
  result.push(text);
  return result;
