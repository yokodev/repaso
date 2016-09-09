"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unaVariable = 10;

var Person2 = function () {
	function Person2(name) {
		_classCallCheck(this, Person2);

		this._name = name;
	}

	_createClass(Person2, [{
		key: "sayName",
		value: function sayName() {
			console.log("my Name is " + $this._name);
		}
	}]);

	return Person2;
}();

var person1 = new Person2("juancito");
console.log([unaVariable, person1]);