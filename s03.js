function joinArraysById(arr1, arr2) {
  // Your solution
  const mergedObj = {};
  arr1.forEach(a => mergedObj[a.id] = a);
  arr2.forEach(a => mergedObj[a.id] = {...mergedObj[a.id], ...a})
  
  return Object.values(mergedObj);
}
