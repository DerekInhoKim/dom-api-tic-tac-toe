const winningConditions = (arr) => {
    
    if (arr[0] === arr[1] && arr[2]) {
        return arr[0]
    
    } else if (arr[3] === arr[4] && arr[5]) {
        return arr[3]
    
    } else if (arr[6] === arr[7] && arr[8]) {
        return arr[6]
    
    } else if (arr[0] === arr[3] && arr[6]) {
        return arr[0]
    
    } else if (arr[1] === arr[4] && arr[7]) {
        return arr[1]
    
    } else if (arr[2] === arr[5] && arr[8]) {
        return arr[2]
    
    } else if (arr[0] === arr[4] && arr[8]) {
        return arr[0]
    
    } else if (arr[2] === arr[4] && arr[6]) {
        return arr[2]
    }
    // 012, 345, 678,
    // 036, 147, 258
    // 048, 246

}

arr1 = ['X', 'X', 'X', 'O', '', 'O', '', 'O', ''];
arr2 = ['O', '', 'O', 'X', 'X', 'X', '', 'O', ''];
arr3 = ['O', 'X', 'X', '', 'O', '', 'X', 'O', 'O'];

// console.log(winningConditions(arr1));
// console.log(winningConditions(arr2));
// console.log(winningConditions(arr3));

console.log(arr1.includes(''))