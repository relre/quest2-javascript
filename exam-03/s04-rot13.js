function rot13(message){
  //your code here
  let result = ""
  
  for (let char of message) {
     if( char >= 'a' && char <= 'z') {
      result += String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13)%26 + 'a'.charCodeAt(0)))
     } else if( char >= 'A' && char <= 'Z') {
        result += String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13)%26 + 'A'.charCodeAt(0)))
     } else {
       result += char
     }
  }
  
  return result
}
