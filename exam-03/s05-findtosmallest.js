function smallest(n) {
    // Your code
  let numStr = n.toString();
    let smallestNum = n;
    let fromIndex = 0;
    let toIndex = 0;

    for (let i = 0; i < numStr.length; i++) {
        let removedChar = numStr[i];
        let remaining = numStr.slice(0, i) + numStr.slice(i + 1);
        
        for (let j = 0; j <= remaining.length; j++) {
            let newNum = remaining.slice(0, j) + removedChar + remaining.slice(j);
            let newNumInt = parseInt(newNum, 10);
            
            if (newNumInt < smallestNum) {
                smallestNum = newNumInt;
                fromIndex = i;
                toIndex = j;
            }
        }
    }

    return [smallestNum, fromIndex, toIndex];
