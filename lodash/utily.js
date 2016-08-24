
var _ = require('lodash');

/**
so this are some functions giving by lodash that we should not be implementing
*/

// 1) Loop for N times

// for (var i = 0; i < 5; i++) {
//   console.log(i+ " value");
// }

// Array.apply(null, Array(5)).forEach(function(){
//   console.log("arrayOfMins");
// });
_.times(5,function () {
    console.log("function");
})

// 2) Loop through a collection and return a deeply-nested property from each item

var ownerArr = [
  {
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
  },
  {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
  }
];

// ownerArr.map(function (owner) {
//     console.log(owner.pets[0].name);
// });

_.map(ownerArr,'pets[0].name');
