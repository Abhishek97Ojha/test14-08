function square(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(square([1,2,3,4,5,6]));
