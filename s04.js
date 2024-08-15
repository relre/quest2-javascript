
function arrayManip(array){
  // your code goes here
  let result = [];
  
  for(let i=0; i<array.length; i++) {
   let rigthElements = array.slice(i+1);
   let greaterElements = rigthElements.filter(val => val > array[i]);
    
   if(greaterElements.length > 0 ) {
     result.push(Math.min(...greaterElements));
   } else {
     result.push(-1)
   }
  }
  
  return result;
}
