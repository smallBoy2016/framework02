'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fn = function fn() {
	console.log(1222);
};

fn();

var Student = function () {
	function Student() {
		_classCallCheck(this, Student);
	}

	_createClass(Student, [{
		key: 'hello',
		value: function hello() {
			console.log('hello12');
		}
	}]);

	return Student;
}();

var s = new Student();

s.hello();
