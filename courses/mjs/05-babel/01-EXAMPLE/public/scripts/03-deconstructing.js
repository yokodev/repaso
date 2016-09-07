"use strict";

(function () {

  var person = {
    name: { first: "Jat", last: "Ama" },
    roles: ["admin"],
    isActive: true
  };

  function printPerson() {
    var roles = person.roles;
    var _person$name = person.name;
    var first = _person$name.first;
    var last = _person$name.last;


    console.log(roles);
    console.log(roles.length);
    console.log('This is my name: ' + first);
    console.log('This is my last: ' + last);
  }
  function printPerson2(param1, _ref) {
    var roles = _ref.roles;
    var _ref$name = _ref.name;
    var first = _ref$name.first;
    var last = _ref$name.last;

    console.log(roles);
  }
  printPerson2(null, person);

  var point = { x: 1, y: 20 };
  function translatePoint(_ref2, amount) {
    var x = _ref2.x;
    var y = _ref2.y;

    return { x: x + amount, y: y + amount };
  }
  console.log(translatePoint(point, 1));

  var _translatePoint = translatePoint(point, 10);

  var x = _translatePoint.x;
  var y = _translatePoint.y;

  // console.log(translatePoint(point,1));

  console.log(x);
  console.log(y);
  // Deconstructing with defaults
  function getTrack() {
    return { title: "titulo", lengthInSeconds: 50 };
  }

  var _getTrack = getTrack();

  var title = _getTrack.title;
  var lengthInSeconds = _getTrack.lengthInSeconds;
  var _getTrack$description = _getTrack.description;
  var description = _getTrack$description === undefined ? "No desc found" : _getTrack$description;

  console.log(title, lengthInSeconds, description);

  //deconstruction on arrarys;
  //
  var array = [1, 2, 3, 4, 5, 6, 7];
  //deconstructing each name to its correspondent array position

  var firstNum = array[0];
  var secondNum = array[1];
  var thirdNum = array[2];

  // deconstructing this time omiting certain values/positions
  // from the array

  var x1 = array[0];
  var y1 = array[1];
  var z1 = array[7];
})();