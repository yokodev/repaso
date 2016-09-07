(() => {
/*
  this is something tha you should not do
  obviasly is the way you fix it in es2015 but  in es2015(es6) use let instead of var
  */
  for (var i = 0; i < 10; i++) {
    (
      j => {
        window.setTimeout(function() {
          console.log(j);
        }, 500);
      }
)(i);
  }
/* This is how you would do it with es6 using let keyword

 */
  // for(let i=0; i<10;i++){
  //   window.setTimeout(function(){console.log(i)},500);
  // }

  let nodefinedyder = 0;
  console.write(nodefinedyder);
})();