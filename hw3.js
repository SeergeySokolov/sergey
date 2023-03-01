let size = 8;
let chessboard = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);



function createObjectFromArrays(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }
  