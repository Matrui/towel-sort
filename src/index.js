
// You should implement your task here.
// const matrix1 = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ];
//  let ourArr = []
 
//  var resultArr = matrix1.reduce(function(first, current, index) {
//   if( index % 2 === 0){
//     for (let matrixLine of current) {
//       ourArr.push(matrixLine);
//   };
//   }else{
//     current.reverse();
//     for (let matrixLine of current) {
//       ourArr.push(matrixLine);
//   };
//   };
//   return ourArr;
//  }, 0);



module.exports = function towelSort (matrix) {
  
 if (matrix == undefined){
  return [];
 }
 let ourArr = []
 
 var resultArr = matrix.reduce(function(first, current, index) {
  if( index % 2 === 0){
    for (let matrixLine of current) {
      ourArr.push(matrixLine);
  };
  }else{
    current.reverse();
    for (let matrixLine of current) {
      ourArr.push(matrixLine);
  };
  };
  return ourArr;
 }, 0);
  
 return ourArr;
};

