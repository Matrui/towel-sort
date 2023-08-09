
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

