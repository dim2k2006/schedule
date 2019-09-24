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
/* harmony import */ var _subjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects */ "./src/subjects.js");
/* harmony import */ var _checkPercentage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPercentage */ "./src/checkPercentage.js");
/* harmony import */ var _genHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genHtml.js */ "./src/genHtml.js");
/* harmony import */ var _utils_getSubjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getSubjects */ "./src/utils/getSubjects/index.js");
/* harmony import */ var _utils_getSubjectsPerMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getSubjectsPerMonth */ "./src/utils/getSubjectsPerMonth/index.js");
/* harmony import */ var _utils_getDaysPerMonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/getDaysPerMonth */ "./src/utils/getDaysPerMonth/index.js");
/* harmony import */ var _utils_genSchedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/genSchedule */ "./src/utils/genSchedule/index.js");







Object(_checkPercentage__WEBPACK_IMPORTED_MODULE_1__["default"])(_subjects__WEBPACK_IMPORTED_MODULE_0__["default"]);
var EDUCATION_DAYS_PER_MONTH = 12;
var educationTimePerMonthInHours = 48;
var EDUCATION_TIME_PER_MONTH_IN_MINUTES = educationTimePerMonthInHours * 60;
var LESSON_DURATION_IN_MINUTES = 60;
var LESSONS_PER_DAY = 4;
var subjectsWithData = Object(_utils_getSubjects__WEBPACK_IMPORTED_MODULE_3__["default"])(_subjects__WEBPACK_IMPORTED_MODULE_0__["default"], EDUCATION_TIME_PER_MONTH_IN_MINUTES, LESSON_DURATION_IN_MINUTES);
var subjectsPerMonth = Object(_utils_getSubjectsPerMonth__WEBPACK_IMPORTED_MODULE_4__["default"])(subjectsWithData);
var daysPerMonth = Object(_utils_getDaysPerMonth__WEBPACK_IMPORTED_MODULE_5__["default"])(EDUCATION_DAYS_PER_MONTH);
var schedule = Object(_utils_genSchedule__WEBPACK_IMPORTED_MODULE_6__["default"])(daysPerMonth, subjectsPerMonth, LESSONS_PER_DAY);
var html = Object(_genHtml_js__WEBPACK_IMPORTED_MODULE_2__["default"])(schedule);
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

/***/ "./src/utils/genSchedule/index.js":
/*!****************************************!*\
  !*** ./src/utils/genSchedule/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/head */ "./node_modules/lodash/head.js");
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/tail */ "./node_modules/lodash/tail.js");
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_tail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/reverse */ "./node_modules/lodash/reverse.js");
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_reverse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _genSchedulePerSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../genSchedulePerSubject */ "./src/utils/genSchedulePerSubject/index.js");





var genSchedule = function genSchedule(days, subjects, lessonsPerDay) {
  if (!subjects.length) return days;
  var newDays = Object(_genSchedulePerSubject__WEBPACK_IMPORTED_MODULE_3__["default"])(days, lodash_head__WEBPACK_IMPORTED_MODULE_0___default()(subjects), lessonsPerDay);
  return genSchedule(lodash_reverse__WEBPACK_IMPORTED_MODULE_2___default()(newDays), lodash_tail__WEBPACK_IMPORTED_MODULE_1___default()(subjects), lessonsPerDay);
};

/* harmony default export */ __webpack_exports__["default"] = (genSchedule);

/***/ }),

/***/ "./src/utils/genSchedulePerSubject/index.js":
/*!**************************************************!*\
  !*** ./src/utils/genSchedulePerSubject/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/head */ "./node_modules/lodash/head.js");
/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/tail */ "./node_modules/lodash/tail.js");
/* harmony import */ var lodash_tail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_tail__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var genSchedulePerSubject = function genSchedulePerSubject(days, subjects, lessonsPerDay) {
  var daysLength = days.length;

  var iter = function iter(daysList, currentDayId, subjectsList) {
    if (!subjectsList.length) return daysList;
    if (daysList.every(function (d) {
      return d.subjects.length === lessonsPerDay;
    })) return daysList;
    var newId = currentDayId === daysLength - 1 ? 0 : currentDayId + 1;
    var day = daysList[currentDayId];
    if (day.subjects.length === lessonsPerDay) return iter(daysList, newId, subjectsList);
    var subject = lodash_head__WEBPACK_IMPORTED_MODULE_0___default()(subjectsList);
    var newDays = daysList.map(function (d) {
      if (d.id !== day.id) return d;
      return _objectSpread({}, d, {
        subjects: [].concat(_toConsumableArray(d.subjects), [subject])
      });
    });
    return iter(newDays, newId, lodash_tail__WEBPACK_IMPORTED_MODULE_1___default()(subjectsList));
  };

  return iter(days, 0, subjects);
};

/* harmony default export */ __webpack_exports__["default"] = (genSchedulePerSubject);

/***/ }),

/***/ "./src/utils/getDaysPerMonth/index.js":
/*!********************************************!*\
  !*** ./src/utils/getDaysPerMonth/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getDaysPerMonth = function getDaysPerMonth(days) {
  return _toConsumableArray(new Array(days)).map(function (d, id) {
    return {
      id: id + 1,
      subjects: []
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getDaysPerMonth);

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

/***/ }),

/***/ "./src/utils/getSubjectsPerMonth/index.js":
/*!************************************************!*\
  !*** ./src/utils/getSubjectsPerMonth/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var getSubjectsPerMonth = function getSubjectsPerMonth(subjects) {
  return subjects.sort(function (a, b) {
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
  }, []).map(function (lessons) {
    return lessons.map(function (lesson) {
      return _objectSpread({}, lesson, {
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSubjectsPerMonth);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9jaGVja1BlcmNlbnRhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbkh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdWJqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2VuU2NoZWR1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dlblNjaGVkdWxlUGVyU3ViamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0RGF5c1Blck1vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXRTdWJqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0U3ViamVjdHNQZXJNb250aC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iLCIvKipcbiAqIEdldHMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAYWxpYXMgZmlyc3RcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5oZWFkKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAxXG4gKlxuICogXy5oZWFkKFtdKTtcbiAqIC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBoZWFkKGFycmF5KSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGFycmF5WzBdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZVJldmVyc2UgPSBhcnJheVByb3RvLnJldmVyc2U7XG5cbi8qKlxuICogUmV2ZXJzZXMgYGFycmF5YCBzbyB0aGF0IHRoZSBmaXJzdCBlbGVtZW50IGJlY29tZXMgdGhlIGxhc3QsIHRoZSBzZWNvbmRcbiAqIGVsZW1lbnQgYmVjb21lcyB0aGUgc2Vjb25kIHRvIGxhc3QsIGFuZCBzbyBvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgYXJyYXlgIGFuZCBpcyBiYXNlZCBvblxuICogW2BBcnJheSNyZXZlcnNlYF0oaHR0cHM6Ly9tZG4uaW8vQXJyYXkvcmV2ZXJzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheSA9IFsxLCAyLCAzXTtcbiAqXG4gKiBfLnJldmVyc2UoYXJyYXkpO1xuICogLy8gPT4gWzMsIDIsIDFdXG4gKlxuICogY29uc29sZS5sb2coYXJyYXkpO1xuICogLy8gPT4gWzMsIDIsIDFdXG4gKi9cbmZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5ID09IG51bGwgPyBhcnJheSA6IG5hdGl2ZVJldmVyc2UuY2FsbChhcnJheSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJzZTtcbiIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcblxuLyoqXG4gKiBHZXRzIGFsbCBidXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50YWlsKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMiwgM11cbiAqL1xuZnVuY3Rpb24gdGFpbChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBiYXNlU2xpY2UoYXJyYXksIDEsIGxlbmd0aCkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWlsO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiY29uc3QgbGltaXQgPSAxMDA7XG5cbmNvbnN0IGNoZWNrUGVyY2VudGFnZSA9IChzdWJqZWN0cykgPT4ge1xuICAgIGNvbnN0IHN1YmplY3RzUGVyY2VudGFnZVN1bSA9IHN1YmplY3RzXG4gICAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBzdWJqZWN0KSA9PiBhY2N1bXVsYXRvciArIHN1YmplY3QucGVyY2VudGFnZSwgMCk7XG5cbiAgICBpZiAoc3ViamVjdHNQZXJjZW50YWdlU3VtID09PSBsaW1pdCkgcmV0dXJuO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBTdWJqZWN0cyBwZXJjZW50YWdlIHN1bSBjYW4gbm90IGJlIGdyZWF0ZXIgdGhlbiAke2xpbWl0fWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tQZXJjZW50YWdlOyIsImNvbnN0IGdlbkh0bWwgPSAoc2NoZWR1bGUpID0+IHNjaGVkdWxlXG4gICAgLm1hcCgoZGF5KSA9PiBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+JHtkYXkuaWR9PC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICR7ZGF5LnN1YmplY3RzLm1hcCgoc3ViamVjdCkgPT4gYDxsaT4ke3N1YmplY3QudGl0bGV9PC9saT5gKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG4gICAgLmpvaW4oJycpO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5IdG1sOyIsImltcG9ydCBzdWJqZWN0cyBmcm9tICcuL3N1YmplY3RzJztcbmltcG9ydCBjaGVja1BlcmNlbnRhZ2UgZnJvbSAnLi9jaGVja1BlcmNlbnRhZ2UnO1xuaW1wb3J0IGdlbkh0bWwgZnJvbSAnLi9nZW5IdG1sLmpzJztcblxuaW1wb3J0IGdldFN1YmplY3RzIGZyb20gJy4vdXRpbHMvZ2V0U3ViamVjdHMnO1xuaW1wb3J0IGdldFN1YmplY3RzUGVyTW9udGggZnJvbSAnLi91dGlscy9nZXRTdWJqZWN0c1Blck1vbnRoJztcbmltcG9ydCBnZXREYXlzUGVyTW9udGggZnJvbSAnLi91dGlscy9nZXREYXlzUGVyTW9udGgnO1xuaW1wb3J0IGdlblNjaGVkdWxlIGZyb20gJy4vdXRpbHMvZ2VuU2NoZWR1bGUnO1xuXG5jaGVja1BlcmNlbnRhZ2Uoc3ViamVjdHMpO1xuXG5jb25zdCBFRFVDQVRJT05fREFZU19QRVJfTU9OVEggPSAxMjtcbmNvbnN0IGVkdWNhdGlvblRpbWVQZXJNb250aEluSG91cnMgPSA0ODtcbmNvbnN0IEVEVUNBVElPTl9USU1FX1BFUl9NT05USF9JTl9NSU5VVEVTID0gZWR1Y2F0aW9uVGltZVBlck1vbnRoSW5Ib3VycyAqIDYwO1xuY29uc3QgTEVTU09OX0RVUkFUSU9OX0lOX01JTlVURVMgPSA2MDtcbmNvbnN0IExFU1NPTlNfUEVSX0RBWSA9IDQ7XG5cbmNvbnN0IHN1YmplY3RzV2l0aERhdGEgPSBnZXRTdWJqZWN0cyhzdWJqZWN0cywgRURVQ0FUSU9OX1RJTUVfUEVSX01PTlRIX0lOX01JTlVURVMsIExFU1NPTl9EVVJBVElPTl9JTl9NSU5VVEVTKTtcbmNvbnN0IHN1YmplY3RzUGVyTW9udGggPSBnZXRTdWJqZWN0c1Blck1vbnRoKHN1YmplY3RzV2l0aERhdGEpO1xuY29uc3QgZGF5c1Blck1vbnRoID0gZ2V0RGF5c1Blck1vbnRoKEVEVUNBVElPTl9EQVlTX1BFUl9NT05USCk7XG5jb25zdCBzY2hlZHVsZSA9IGdlblNjaGVkdWxlKGRheXNQZXJNb250aCwgc3ViamVjdHNQZXJNb250aCwgTEVTU09OU19QRVJfREFZKTtcblxuY29uc3QgaHRtbCA9IGdlbkh0bWwoc2NoZWR1bGUpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGh0bWw7IiwiaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0aXRsZTogJ2hleGxldCcsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDMwLFxuICAgICAgICB0eXBlOiAndGVjaG5pY2FsJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRpdGxlOiAn0YLQtdGFLtC70LjRgicsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDIwLFxuICAgICAgICB0eXBlOiAndGVjaG5pY2FsJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRpdGxlOiAn0YXRg9C0LtC70LjRgicsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDIwLFxuICAgICAgICB0eXBlOiAnaHVtYW5pdGFyaWFuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRpdGxlOiAnY29kZWJhc2ljcycsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgIHR5cGU6ICd0ZWNobmljYWwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfQsNC90LPQuy7Rj9C3JyxcbiAgICAgICAgcGVyY2VudGFnZTogMTAsXG4gICAgICAgIHR5cGU6ICdodW1hbml0YXJpYW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfQv9C40LDQvdC40L3QvicsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwLFxuICAgICAgICB0eXBlOiAnaHVtYW5pdGFyaWFuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRpdGxlOiAn0YHQutC+0YDQvtGH0YLQtdC90LjQtScsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgIHR5cGU6ICdodW1hbml0YXJpYW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICdlZ2doZWFkJyxcbiAgICAgICAgcGVyY2VudGFnZTogMTAsXG4gICAgICAgIHR5cGU6ICd0ZWNobmljYWwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGl0bGU6ICfQnNCo0J8nLFxuICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICB0eXBlOiAndGVjaG5pY2FsJ1xuICAgIH1cbl07IiwiaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnO1xuaW1wb3J0IHRhaWwgZnJvbSAnbG9kYXNoL3RhaWwnO1xuaW1wb3J0IHJldmVyc2UgZnJvbSAnbG9kYXNoL3JldmVyc2UnO1xuaW1wb3J0IGdlblNjaGVkdWxlUGVyU3ViamVjdCBmcm9tICcuLi9nZW5TY2hlZHVsZVBlclN1YmplY3QnO1xuXG5jb25zdCBnZW5TY2hlZHVsZSA9IChkYXlzLCBzdWJqZWN0cywgbGVzc29uc1BlckRheSkgPT4ge1xuICBpZiAoIXN1YmplY3RzLmxlbmd0aCkgcmV0dXJuIGRheXM7XG5cbiAgY29uc3QgbmV3RGF5cyA9IGdlblNjaGVkdWxlUGVyU3ViamVjdChkYXlzLCBoZWFkKHN1YmplY3RzKSwgbGVzc29uc1BlckRheSk7XG5cbiAgcmV0dXJuIGdlblNjaGVkdWxlKHJldmVyc2UobmV3RGF5cyksIHRhaWwoc3ViamVjdHMpLCBsZXNzb25zUGVyRGF5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlblNjaGVkdWxlO1xuIiwiaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnO1xuaW1wb3J0IHRhaWwgZnJvbSAnbG9kYXNoL3RhaWwnO1xuXG5jb25zdCBnZW5TY2hlZHVsZVBlclN1YmplY3QgPSAoZGF5cywgc3ViamVjdHMsIGxlc3NvbnNQZXJEYXkpID0+IHtcbiAgY29uc3QgZGF5c0xlbmd0aCA9IGRheXMubGVuZ3RoO1xuXG4gIGNvbnN0IGl0ZXIgPSAoZGF5c0xpc3QsIGN1cnJlbnREYXlJZCwgc3ViamVjdHNMaXN0KSA9PiB7XG4gICAgaWYgKCFzdWJqZWN0c0xpc3QubGVuZ3RoKSByZXR1cm4gZGF5c0xpc3Q7XG5cbiAgICBpZiAoZGF5c0xpc3QuZXZlcnkoKGQpID0+IGQuc3ViamVjdHMubGVuZ3RoID09PSBsZXNzb25zUGVyRGF5KSkgcmV0dXJuIGRheXNMaXN0O1xuXG4gICAgY29uc3QgbmV3SWQgPSAoY3VycmVudERheUlkID09PSBkYXlzTGVuZ3RoIC0gMSkgPyAwIDogY3VycmVudERheUlkICsgMTtcblxuICAgIGNvbnN0IGRheSA9IGRheXNMaXN0W2N1cnJlbnREYXlJZF07XG5cbiAgICBpZiAoZGF5LnN1YmplY3RzLmxlbmd0aCA9PT0gbGVzc29uc1BlckRheSkgcmV0dXJuIGl0ZXIoZGF5c0xpc3QsIG5ld0lkLCBzdWJqZWN0c0xpc3QpO1xuXG4gICAgY29uc3Qgc3ViamVjdCA9IGhlYWQoc3ViamVjdHNMaXN0KTtcblxuICAgIGNvbnN0IG5ld0RheXMgPSBkYXlzTGlzdC5tYXAoKGQpID0+IHtcbiAgICAgIGlmIChkLmlkICE9PSBkYXkuaWQpIHJldHVybiBkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kLFxuICAgICAgICBzdWJqZWN0czogWy4uLmQuc3ViamVjdHMsIHN1YmplY3RdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVyKG5ld0RheXMsIG5ld0lkLCB0YWlsKHN1YmplY3RzTGlzdCkpO1xuICB9O1xuXG4gIHJldHVybiBpdGVyKGRheXMsIDAsIHN1YmplY3RzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlblNjaGVkdWxlUGVyU3ViamVjdDtcbiIsImNvbnN0IGdldERheXNQZXJNb250aCA9IChkYXlzKSA9PiBbLi4ubmV3IEFycmF5KGRheXMpXVxuICAubWFwKChkLCBpZCkgPT4gKHsgaWQ6IGlkICsgMSwgc3ViamVjdHM6IFtdIH0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5c1Blck1vbnRoO1xuIiwiY29uc3QgZ2V0U3ViamVjdHMgPSAoc3ViamVjdHMsIGVkdWNhdGlvblRpbWUsIGxlc3NvbkR1cmF0aW9uKSA9PiBzdWJqZWN0c1xuICAubWFwKChzdWJqZWN0KSA9PiAoe1xuICAgIC4uLnN1YmplY3QsXG4gICAgbGVzc29uc1Blck1vbnRoOiBNYXRoLnJvdW5kKCgoZWR1Y2F0aW9uVGltZSAqIHN1YmplY3QucGVyY2VudGFnZSkgLyAxMDApIC8gbGVzc29uRHVyYXRpb24pLFxuICB9KSlcbiAgLmZpbHRlcigoc3ViamVjdCkgPT4gc3ViamVjdC5sZXNzb25zUGVyTW9udGggPiAwKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3ViamVjdHM7XG4iLCJpbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5jb25zdCBnZXRTdWJqZWN0c1Blck1vbnRoID0gKHN1YmplY3RzKSA9PiBzdWJqZWN0c1xuICAuc29ydCgoYSwgYikgPT4gKGEucGVyY2VudGFnZSA+IGIucGVyY2VudGFnZSA/IC0xIDogMSkpXG4gIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBzdWJqZWN0KSA9PiB7XG4gICAgY29uc3QgbGVzc29uc1Blck1vbnRoID0gWy4uLm5ldyBBcnJheShzdWJqZWN0Lmxlc3NvbnNQZXJNb250aCldXG4gICAgICAubWFwKCgpID0+ICh7XG4gICAgICAgIGlkOiBzdWJqZWN0LmlkLFxuICAgICAgICBwZXJjZW50YWdlOiBzdWJqZWN0LnBlcmNlbnRhZ2UsXG4gICAgICAgIHRpdGxlOiBzdWJqZWN0LnRpdGxlLFxuICAgICAgICB0eXBlOiBzdWJqZWN0LnR5cGUsXG4gICAgICB9KSk7XG5cbiAgICByZXR1cm4gWy4uLmFjY3VtdWxhdG9yLCBsZXNzb25zUGVyTW9udGhdO1xuICB9LCBbXSlcbiAgLm1hcCgobGVzc29ucykgPT4gbGVzc29ucy5tYXAoKGxlc3NvbikgPT4gKHsgLi4ubGVzc29uLCBpZDogdXVpZHY0KCkgfSkpKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3ViamVjdHNQZXJNb250aDtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBV0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFMQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBQ0E7QUFjQTs7OztBIiwic291cmNlUm9vdCI6IiJ9