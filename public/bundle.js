/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/head.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/head.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),

/***/ "./node_modules/lodash/reverse.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/reverse.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;


/***/ }),

/***/ "./node_modules/lodash/tail.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/tail.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/checkPercentage.js":
/*!********************************!*\
  !*** ./src/checkPercentage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var limit = 100;

var checkPercentage = function checkPercentage(subjects) {
  var subjectsPercentageSum = subjects.reduce(function (accumulator, subject) {
    return accumulator + subject.percentage;
  }, 0);
  if (subjectsPercentageSum === limit) return;
  throw new Error("Subjects percentage sum can not be greater then ".concat(limit));
};

/* harmony default export */ __webpack_exports__["default"] = (checkPercentage);

/***/ }),

/***/ "./src/genHtml.js":
/*!************************!*\
  !*** ./src/genHtml.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var genHtml = function genHtml(schedule) {
  return schedule.map(function (day) {
    return "\n        <div>\n            <h1>".concat(day.id, "</h1>\n            \n            <ul>\n                ").concat(day.subjects.map(function (subject) {
      return "<li>".concat(subject.title, "</li>");
    }).join(''), "\n            </ul>\n        </div>\n    ");
  }).join('');
};

/* harmony default export */ __webpack_exports__["default"] = (genHtml);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/head */ "./node_modules/lodash/head.js");
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/tail */ "./node_modules/lodash/tail.js");
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_tail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/reverse */ "./node_modules/lodash/reverse.js");
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_reverse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subjects */ "./src/subjects.js");
/* harmony import */ var _checkPercentage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkPercentage */ "./src/checkPercentage.js");
/* harmony import */ var _genHtml_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genHtml.js */ "./src/genHtml.js");
/* harmony import */ var _utils_getSubjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getSubjects */ "./src/utils/getSubjects/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }









Object(_checkPercentage__WEBPACK_IMPORTED_MODULE_5__["default"])(_subjects__WEBPACK_IMPORTED_MODULE_4__["default"]);
var educationDaysPerMonth = 12;
var educationTimePerMonthInHours = 48;
var EDUCATION_TIME_PER_MONTH_IN_MINUTES = educationTimePerMonthInHours * 60;
var LESSON_DURATION_IN_MINUTES = 60;
var lessonsPerDay = 4;

var getSubjectsPerMonth = function getSubjectsPerMonth(subjects) {
  var subjectsPerMonth = subjects.sort(function (a, b) {
    return a.percentage > b.percentage ? -1 : 1;
  }).reduce(function (accumulator, subject) {
    var lessonsPerMonth = _toConsumableArray(new Array(subject.lessonsPerMonth)).map(function () {
      return {
        id: subject.id,
        percentage: subject.percentage,
        title: subject.title,
        type: subject.type
      };
    });

    return [].concat(_toConsumableArray(accumulator), [lessonsPerMonth]);
  }, []).map(function (subjects) {
    return subjects.map(function (subject) {
      return _objectSpread({}, subject, {
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()
      });
    });
  });
  return subjectsPerMonth;
};

var getDaysPerMonth = function getDaysPerMonth(days) {
  return _toConsumableArray(new Array(days)).map(function (d, id) {
    return {
      id: id + 1,
      subjects: []
    };
  });
};

var genSchedulePerSubject = function genSchedulePerSubject(days, subjects) {
  var daysLength = days.length;

  var iter = function iter(days, currentDayId, subjects) {
    if (!subjects.length) return days;
    if (days.every(function (d) {
      return d.subjects.length === lessonsPerDay;
    })) return days;
    var newId = currentDayId === daysLength - 1 ? 0 : currentDayId + 1;
    var day = days[currentDayId];
    if (day.subjects.length === lessonsPerDay) return iter(days, newId, subjects);
    var subject = lodash_head__WEBPACK_IMPORTED_MODULE_1___default()(subjects);
    var newDays = days.map(function (d) {
      if (d.id !== day.id) return d;
      return _objectSpread({}, d, {
        subjects: [].concat(_toConsumableArray(d.subjects), [subject])
      });
    });
    return iter(newDays, newId, lodash_tail__WEBPACK_IMPORTED_MODULE_2___default()(subjects));
  };

  return iter(days, 0, subjects);
};

var genSchedule = function genSchedule(days, subjects) {
  if (!subjects.length) return days;
  var newDays = genSchedulePerSubject(days, lodash_head__WEBPACK_IMPORTED_MODULE_1___default()(subjects));
  return genSchedule(lodash_reverse__WEBPACK_IMPORTED_MODULE_3___default()(newDays), lodash_tail__WEBPACK_IMPORTED_MODULE_2___default()(subjects));
};

var subjectsWithData = Object(_utils_getSubjects__WEBPACK_IMPORTED_MODULE_7__["default"])(_subjects__WEBPACK_IMPORTED_MODULE_4__["default"], EDUCATION_TIME_PER_MONTH_IN_MINUTES, LESSON_DURATION_IN_MINUTES);
var subjectsPerMonth = getSubjectsPerMonth(subjectsWithData);
var daysPerMonth = getDaysPerMonth(educationDaysPerMonth);
var schedule = genSchedule(daysPerMonth, subjectsPerMonth);
var html = Object(_genHtml_js__WEBPACK_IMPORTED_MODULE_6__["default"])(schedule);
document.body.innerHTML = html;

/***/ }),

/***/ "./src/subjects.js":
/*!*************************!*\
  !*** ./src/subjects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'hexlet',
  percentage: 30,
  type: 'technical'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'тех.лит',
  percentage: 20,
  type: 'technical'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'худ.лит',
  percentage: 20,
  type: 'humanitarian'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'codebasics',
  percentage: 0,
  type: 'technical'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'англ.яз',
  percentage: 10,
  type: 'humanitarian'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'пианино',
  percentage: 10,
  type: 'humanitarian'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'скорочтение',
  percentage: 0,
  type: 'humanitarian'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'egghead',
  percentage: 10,
  type: 'technical'
}, {
  id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()(),
  title: 'МШП',
  percentage: 0,
  type: 'technical'
}]);

/***/ }),

/***/ "./src/utils/getSubjects/index.js":
/*!****************************************!*\
  !*** ./src/utils/getSubjects/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getSubjects = function getSubjects(subjects, educationTime, lessonDuration) {
  return subjects.map(function (subject) {
    return _objectSpread({}, subject, {
      lessonsPerMonth: Math.round(educationTime * subject.percentage / 100 / lessonDuration)
    });
  }).filter(function (subject) {
    return subject.lessonsPerMonth > 0;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSubjects);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9jaGVja1BlcmNlbnRhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbkh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdWJqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0U3ViamVjdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGFsaWFzIGZpcnN0XG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaGVhZChbMSwgMiwgM10pO1xuICogLy8gPT4gMVxuICpcbiAqIF8uaGVhZChbXSk7XG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gaGVhZChhcnJheSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBhcnJheVswXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWFkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVSZXZlcnNlID0gYXJyYXlQcm90by5yZXZlcnNlO1xuXG4vKipcbiAqIFJldmVyc2VzIGBhcnJheWAgc28gdGhhdCB0aGUgZmlyc3QgZWxlbWVudCBiZWNvbWVzIHRoZSBsYXN0LCB0aGUgc2Vjb25kXG4gKiBlbGVtZW50IGJlY29tZXMgdGhlIHNlY29uZCB0byBsYXN0LCBhbmQgc28gb24uXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYGFycmF5YCBhbmQgaXMgYmFzZWQgb25cbiAqIFtgQXJyYXkjcmV2ZXJzZWBdKGh0dHBzOi8vbWRuLmlvL0FycmF5L3JldmVyc2UpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXkgPSBbMSwgMiwgM107XG4gKlxuICogXy5yZXZlcnNlKGFycmF5KTtcbiAqIC8vID0+IFszLCAyLCAxXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5KTtcbiAqIC8vID0+IFszLCAyLCAxXVxuICovXG5mdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIHJldHVybiBhcnJheSA9PSBudWxsID8gYXJyYXkgOiBuYXRpdmVSZXZlcnNlLmNhbGwoYXJyYXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJldmVyc2U7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyk7XG5cbi8qKlxuICogR2V0cyBhbGwgYnV0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGFpbChbMSwgMiwgM10pO1xuICogLy8gPT4gWzIsIDNdXG4gKi9cbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYmFzZVNsaWNlKGFycmF5LCAxLCBsZW5ndGgpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFpbDtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImNvbnN0IGxpbWl0ID0gMTAwO1xuXG5jb25zdCBjaGVja1BlcmNlbnRhZ2UgPSAoc3ViamVjdHMpID0+IHtcbiAgICBjb25zdCBzdWJqZWN0c1BlcmNlbnRhZ2VTdW0gPSBzdWJqZWN0c1xuICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgc3ViamVjdCkgPT4gYWNjdW11bGF0b3IgKyBzdWJqZWN0LnBlcmNlbnRhZ2UsIDApO1xuXG4gICAgaWYgKHN1YmplY3RzUGVyY2VudGFnZVN1bSA9PT0gbGltaXQpIHJldHVybjtcblxuICAgIHRocm93IG5ldyBFcnJvcihgU3ViamVjdHMgcGVyY2VudGFnZSBzdW0gY2FuIG5vdCBiZSBncmVhdGVyIHRoZW4gJHtsaW1pdH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrUGVyY2VudGFnZTsiLCJjb25zdCBnZW5IdG1sID0gKHNjaGVkdWxlKSA9PiBzY2hlZHVsZVxuICAgIC5tYXAoKGRheSkgPT4gYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPiR7ZGF5LmlkfTwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAke2RheS5zdWJqZWN0cy5tYXAoKHN1YmplY3QpID0+IGA8bGk+JHtzdWJqZWN0LnRpdGxlfTwvbGk+YCkuam9pbignJyl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxuICAgIC5qb2luKCcnKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuSHRtbDsiLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnO1xuaW1wb3J0IHRhaWwgZnJvbSAnbG9kYXNoL3RhaWwnO1xuaW1wb3J0IHJldmVyc2UgZnJvbSAnbG9kYXNoL3JldmVyc2UnO1xuaW1wb3J0IHN1YmplY3RzIGZyb20gJy4vc3ViamVjdHMnO1xuaW1wb3J0IGNoZWNrUGVyY2VudGFnZSBmcm9tICcuL2NoZWNrUGVyY2VudGFnZSc7XG5pbXBvcnQgZ2VuSHRtbCBmcm9tICcuL2dlbkh0bWwuanMnO1xuXG5pbXBvcnQgZ2V0U3ViamVjdHMgZnJvbSAnLi91dGlscy9nZXRTdWJqZWN0cyc7XG5cbmNoZWNrUGVyY2VudGFnZShzdWJqZWN0cyk7XG5cbmNvbnN0IGVkdWNhdGlvbkRheXNQZXJNb250aCA9IDEyO1xuY29uc3QgZWR1Y2F0aW9uVGltZVBlck1vbnRoSW5Ib3VycyA9IDQ4O1xuY29uc3QgRURVQ0FUSU9OX1RJTUVfUEVSX01PTlRIX0lOX01JTlVURVMgPSBlZHVjYXRpb25UaW1lUGVyTW9udGhJbkhvdXJzICogNjA7XG5jb25zdCBMRVNTT05fRFVSQVRJT05fSU5fTUlOVVRFUyA9IDYwO1xuY29uc3QgbGVzc29uc1BlckRheSA9IDQ7XG5cbmNvbnN0IGdldFN1YmplY3RzUGVyTW9udGggPSAoc3ViamVjdHMpID0+IHtcbiAgICBjb25zdCBzdWJqZWN0c1Blck1vbnRoID0gc3ViamVjdHNcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucGVyY2VudGFnZSA+IGIucGVyY2VudGFnZSA/IC0xIDogMSlcbiAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIHN1YmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlc3NvbnNQZXJNb250aCA9IFsuLi5uZXcgQXJyYXkoc3ViamVjdC5sZXNzb25zUGVyTW9udGgpXVxuICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHN1YmplY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHN1YmplY3QucGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHN1YmplY3QudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHN1YmplY3QudHlwZVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY2N1bXVsYXRvciwgbGVzc29uc1Blck1vbnRoXTtcbiAgICAgICAgfSwgW10pXG4gICAgICAgIC5tYXAoKHN1YmplY3RzKSA9PiBzdWJqZWN0cy5tYXAoKHN1YmplY3QpID0+ICh7Li4uc3ViamVjdCwgaWQ6IHV1aWR2NCgpfSkpKTtcblxuICAgIHJldHVybiBzdWJqZWN0c1Blck1vbnRoO1xufTtcblxuY29uc3QgZ2V0RGF5c1Blck1vbnRoID0gKGRheXMpID0+IFsuLi5uZXcgQXJyYXkoZGF5cyldLm1hcCgoZCwgaWQpID0+ICh7aWQ6IGlkICsgMSwgc3ViamVjdHM6IFtdfSkpO1xuXG5jb25zdCBnZW5TY2hlZHVsZVBlclN1YmplY3QgPSAoZGF5cywgc3ViamVjdHMpID0+IHtcbiAgICBjb25zdCBkYXlzTGVuZ3RoID0gZGF5cy5sZW5ndGg7XG5cbiAgICBjb25zdCBpdGVyID0gKGRheXMsIGN1cnJlbnREYXlJZCwgc3ViamVjdHMpID0+IHtcbiAgICAgICAgaWYgKCFzdWJqZWN0cy5sZW5ndGgpIHJldHVybiBkYXlzO1xuXG4gICAgICAgIGlmIChkYXlzLmV2ZXJ5KChkKSA9PiBkLnN1YmplY3RzLmxlbmd0aCA9PT0gbGVzc29uc1BlckRheSkpIHJldHVybiBkYXlzO1xuXG4gICAgICAgIGNvbnN0IG5ld0lkID0gKGN1cnJlbnREYXlJZCA9PT0gZGF5c0xlbmd0aCAtIDEpID8gMCA6IGN1cnJlbnREYXlJZCArIDE7XG5cbiAgICAgICAgY29uc3QgZGF5ID0gZGF5c1tjdXJyZW50RGF5SWRdO1xuXG4gICAgICAgIGlmIChkYXkuc3ViamVjdHMubGVuZ3RoID09PSBsZXNzb25zUGVyRGF5KSByZXR1cm4gaXRlcihkYXlzLCBuZXdJZCwgc3ViamVjdHMpO1xuXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBoZWFkKHN1YmplY3RzKTtcblxuICAgICAgICBjb25zdCBuZXdEYXlzID0gZGF5cy5tYXAoKGQpID0+IHtcbiAgICAgICAgICAgIGlmIChkLmlkICE9PSBkYXkuaWQpIHJldHVybiBkO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmQsXG4gICAgICAgICAgICAgICAgc3ViamVjdHM6IFsuLi5kLnN1YmplY3RzLCBzdWJqZWN0XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZXIobmV3RGF5cywgbmV3SWQsIHRhaWwoc3ViamVjdHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGl0ZXIoZGF5cywgMCwgc3ViamVjdHMpO1xufTtcblxuY29uc3QgZ2VuU2NoZWR1bGUgPSAoZGF5cywgc3ViamVjdHMpID0+IHtcbiAgICBpZiAoIXN1YmplY3RzLmxlbmd0aCkgcmV0dXJuIGRheXM7XG5cbiAgICBjb25zdCBuZXdEYXlzID0gZ2VuU2NoZWR1bGVQZXJTdWJqZWN0KGRheXMsIGhlYWQoc3ViamVjdHMpKTtcblxuICAgIHJldHVybiBnZW5TY2hlZHVsZShyZXZlcnNlKG5ld0RheXMpLCB0YWlsKHN1YmplY3RzKSk7XG59O1xuXG5jb25zdCBzdWJqZWN0c1dpdGhEYXRhID0gZ2V0U3ViamVjdHMoc3ViamVjdHMsIEVEVUNBVElPTl9USU1FX1BFUl9NT05USF9JTl9NSU5VVEVTLCBMRVNTT05fRFVSQVRJT05fSU5fTUlOVVRFUyk7XG5jb25zdCBzdWJqZWN0c1Blck1vbnRoID0gZ2V0U3ViamVjdHNQZXJNb250aChzdWJqZWN0c1dpdGhEYXRhKTtcbmNvbnN0IGRheXNQZXJNb250aCA9IGdldERheXNQZXJNb250aChlZHVjYXRpb25EYXlzUGVyTW9udGgpO1xuY29uc3Qgc2NoZWR1bGUgPSBnZW5TY2hlZHVsZShkYXlzUGVyTW9udGgsIHN1YmplY3RzUGVyTW9udGgpO1xuXG5jb25zdCBodG1sID0gZ2VuSHRtbChzY2hlZHVsZSk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gaHRtbDsiLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRpdGxlOiAnaGV4bGV0JyxcbiAgICAgICAgcGVyY2VudGFnZTogMzAsXG4gICAgICAgIHR5cGU6ICd0ZWNobmljYWwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfRgtC10YUu0LvQuNGCJyxcbiAgICAgICAgcGVyY2VudGFnZTogMjAsXG4gICAgICAgIHR5cGU6ICd0ZWNobmljYWwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfRhdGD0LQu0LvQuNGCJyxcbiAgICAgICAgcGVyY2VudGFnZTogMjAsXG4gICAgICAgIHR5cGU6ICdodW1hbml0YXJpYW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICdjb2RlYmFzaWNzJyxcbiAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgdHlwZTogJ3RlY2huaWNhbCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0aXRsZTogJ9Cw0L3Qs9C7LtGP0LcnLFxuICAgICAgICBwZXJjZW50YWdlOiAxMCxcbiAgICAgICAgdHlwZTogJ2h1bWFuaXRhcmlhbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0aXRsZTogJ9C/0LjQsNC90LjQvdC+JyxcbiAgICAgICAgcGVyY2VudGFnZTogMTAsXG4gICAgICAgIHR5cGU6ICdodW1hbml0YXJpYW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfRgdC60L7RgNC+0YfRgtC10L3QuNC1JyxcbiAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgdHlwZTogJ2h1bWFuaXRhcmlhbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0aXRsZTogJ2VnZ2hlYWQnLFxuICAgICAgICBwZXJjZW50YWdlOiAxMCxcbiAgICAgICAgdHlwZTogJ3RlY2huaWNhbCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0aXRsZTogJ9Cc0KjQnycsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgIHR5cGU6ICd0ZWNobmljYWwnXG4gICAgfVxuXTsiLCJjb25zdCBnZXRTdWJqZWN0cyA9IChzdWJqZWN0cywgZWR1Y2F0aW9uVGltZSwgbGVzc29uRHVyYXRpb24pID0+IHN1YmplY3RzXG4gIC5tYXAoKHN1YmplY3QpID0+ICh7XG4gICAgLi4uc3ViamVjdCxcbiAgICBsZXNzb25zUGVyTW9udGg6IE1hdGgucm91bmQoKChlZHVjYXRpb25UaW1lICogc3ViamVjdC5wZXJjZW50YWdlKSAvIDEwMCkgLyBsZXNzb25EdXJhdGlvbiksXG4gIH0pKVxuICAuZmlsdGVyKChzdWJqZWN0KSA9PiBzdWJqZWN0Lmxlc3NvbnNQZXJNb250aCA+IDApO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTdWJqZWN0cztcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFBQTtBQUxBO0FBQ0E7QUFNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9