function loopOver(action){
  for(var i = 0; i<10; i++){
    action(i);
  }
}
// loopOver(function(number){
//   console.log(number);
// });
/**
 * [num single parameter, single line, notice there is no need for {}]
 * @type {[type]}
 */
// loopOver(num => console.log(num));
/**
 * [number single parameter multiple lines after the { ]
 * @type {[type]}
 */
// loopOver(number =>{
//   console.log(number);
//   console.log(number *10);
// });

/**
 * [it does not have any parameters, but you invoqued as any regular function]
 * @return {[type]} [description]
 */
var noparamFun = () => console.log("HI");
// noparamFun();

/**
 * [multiParamFun so in this case it takes two parameters, izq and der,also
 *  notice that  it does not have the {} is just the operation of the two parameters,
 *  hence indicating a IMPLICIT return before them.
 * NOTICE in the second form (where the "{}" are included the return statement is
 * mandatory for the function to actually works in the console.log)  ]
 * @param  {[type]} izq [description]
 * @param  {[type]} der [description]
 * @return {[type]}     [description]
 */
//FIRST FORM
// var multiParamFun = (izq, der) => izq + der;

//SECOND FORM
var multiParamFun = (izq, der) => {
    return izq + der;
}

console.log(multiParamFun(1 ,2));
