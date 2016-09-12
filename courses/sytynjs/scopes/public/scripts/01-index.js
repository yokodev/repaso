'use strict';




function filterArray (array, predicate) {
  var result = [];

  for(var i = 0; i<array.length; i++){
    var item = array[i];

    if(!predicate(item))
      continue;

    result.push(item);
  }

  return result;
}

var  array = [1,2,3,4,5,6,7,8,9,10];
var res = filterArray(array, function(item) {
    return item<5;
});
//menores de 5 para este caso
// console.log(res);


function lessThanfilter(lessThan){
  return function(item) {
      return item <lessThan;
  };
}

var lessThanCinco = lessThanfilter(5);
var lessThanDiez = lessThanfilter(10);
/**
 * this basically is a sort of function factory
 * lessThanfilter is goig to create a function depending
 * on the number of predicate that is giving
 */
// console.log(lessThanCinco(3),lessThanCinco(6));
// console.log(lessThanCinco(10),lessThanCinco(9));

/*
this guy here is going to return itemes in the array that are
less that 8 below
 */

//console.log(filterArray(array, lessThanfilter(8)));

function validatePassword(password){
  var calledCount =0;
  return function(attempt) {
    calledCount++;
    console.log("Validator of "+ password + " called: " + calledCount + "times");
    return attempt === password;
  }
}

var validateA = validatePassword("passswordA");
var validateB = validatePassword("passswordB");
