// Check if one array of numbers equals another
function numberArrayEquals(x: number[], y: number[]) {
    return Array.isArray(x) &&
      Array.isArray(y) &&
      x.length === y.length &&
      x.every((val, i) => val === y[i]);
  }

// Check if given row exists in matrix of numbers
function existsInMatrix(key: number[], matrix: number[][]){
    for(let i = 0; i < matrix.length; i++){
      if(numberArrayEquals(matrix[i], key)) return true; 
    }
    return false;
}

export default existsInMatrix;