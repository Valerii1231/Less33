"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//  1
fetch('../json/data.json').then(function (response) {
  return response.json();
}).then(function (data) {
  return showAdminName(data);
});

function showAdminName(data) {
  iterate(data);

  function iterate(obj) {
    Object.keys(obj).forEach(function (p) {
      if (_typeof(obj[p]) === 'object') {
        iterate(obj[p]);
      } else {
        if (obj[p] === true) {
          console.log(obj.name);
        }
      }
    });
  }

  ;
} //  2


var nikola = {
  firstName: 'Nikola',
  lastName: 'Tesla'
};
var bob = {
  firstName: 'Bob'
};
var mike = {
  lastName: 'Smith'
};
var michael = {};

var getFullName = function getFullName(user) {
  return "".concat(user.firstName, " ").concat(user.lastName);
};

getFullName = new Proxy(getFullName, {
  apply: function apply(target, thisArg, args) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (Object.keys(key).length === 0) {
          return 'No name';
        }

        for (var k in key) {
          if (Object.keys(key).length === 1) {
            return "".concat(key[k]);
          }
        }

        return target(key);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});
console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael)); //  3

var user = [{
  name: 'Nikola',
  age: 18,
  id: 1
}, {
  name: 'Bob',
  age: 25,
  id: 2
}, {
  name: 'Mike',
  age: 32,
  id: 3
}];
localStorage.setItem('user', JSON.stringify(user));

function sayHelloToUser(id) {
  var arr = JSON.parse(localStorage.getItem('user'));
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      for (var i in item) {
        if (i === 'id' && item[i] === id) {
          console.log('Hello: ', item.name);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

sayHelloToUser(3); //  4

function showValue() {
  localStorage.setItem('input', JSON.stringify(document.querySelector('input').value));
}

var btn = document.querySelector('button');
btn.addEventListener('click', showValue);
document.querySelector('input').value = localStorage.getItem('input');