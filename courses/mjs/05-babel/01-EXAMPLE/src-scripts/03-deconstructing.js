(() => {

  const person = {
    name: {first: "Jat", last: "Ama"},
    roles: ["admin"],
    isActive: true
  };

  function printPerson(){
    const {roles , name:{first, last}} = person;

    console.log(roles);
    console.log(roles.length);
    console.log('This is my name: '+first);
    console.log('This is my last: '+last);
  }
  function printPerson2(param1,{roles, name:{first,last}}) {
    console.log(roles);
  }
  printPerson2(null,person);

  const point = {x:1, y:20};
  function translatePoint({x,y},amount) {
    return {x: x + amount, y: y + amount};
  }
  console.log(translatePoint(point,1));
  const {x,y} = translatePoint(point,10);

  // console.log(translatePoint(point,1));

  console.log(x);
  console.log(y);
// Deconstructing with defaults
function getTrack() {
  return {title:"titulo", lengthInSeconds: 50};
}
const {title, lengthInSeconds, description = "No desc found"} = getTrack();
console.log(title,lengthInSeconds,description);

//deconstruction on arrarys;
//
const array = [1,2,3,4,5,6,7];
//deconstructing each name to its correspondent array position

const [firstNum, secondNum, thirdNum ] = array;

// deconstructing this time omiting certain values/positions
// from the array
const [x1,y1,,,,, , z1] = array;


})();
