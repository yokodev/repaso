function loopOver(action){
  for(var i = 0; i<10; i++){
    action(i);
  }
}
// loopOver(function(number){
//   console.log(number);
// });


loopOver(number => console.log(number));

loopOver(number =>{
  console.log(number);
  console.log(number *10);
});