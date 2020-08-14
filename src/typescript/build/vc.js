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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./class/grammar-set/colors.ts":
/*!*************************************!*\
  !*** ./class/grammar-set/colors.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.colorNamesGrammars = void 0;
exports.colorNamesGrammars = [
    'aqua',
    'azure',
    'beige',
    'bisque',
    'black',
    'blue',
    'brown',
    'chocolate',
    'coral',
    'crimson',
    'cyan',
    'fuchsia',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lime',
    'linen',
    'magenta',
    'maroon',
    'moccasin',
    'navy',
    'olive',
    'orange',
    'orchid',
    'peru',
    'pink',
    'plum',
    'purple',
    'red',
    'salmon',
    'sienna',
    'silver',
    'snow',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'white',
    'yellow'
];


/***/ }),

/***/ "./class/main.ts":
/*!***********************!*\
  !*** ./class/main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var voice_commander_1 = __webpack_require__(/*! ./voice-commander */ "./class/voice-commander.ts");
var colors_1 = __webpack_require__(/*! ./grammar-set/colors */ "./class/grammar-set/colors.ts");
var options = {
    grammarData: colors_1.colorNamesGrammars,
    callback: function (r) {
        console.log(r);
    }
};
var VoiceCommanderInstance = new voice_commander_1.VoiceCommander(options);
console.log(VoiceCommanderInstance);
VoiceCommanderInstance.run();


/***/ }),

/***/ "./class/voice-commander.ts":
/*!**********************************!*\
  !*** ./class/voice-commander.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceCommander = void 0;
var VoiceCommander = (function () {
    function VoiceCommander(options) {
        var _this = this;
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
        this.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
        this.grammar = '';
        this.diagnostic = '';
        this.hints = '';
        if (typeof options !== 'undefined') {
            this.grammarData = options.grammarData;
        }
        this.grammar = '#JSGF V1.0; grammar grammarData; public <color> = ' + this.grammarData.join(' | ') + ' ;';
        this.recognition = new this.SpeechRecognition();
        this.speechRecognitionList = new this.SpeechGrammarList();
        this.speechRecognitionList.addFromString(this.grammar, 1);
        this.recognition.grammars = this.speechRecognitionList;
        this.recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
        this.queryType = '';
        this.grammarData.forEach(function (v) {
            _this.queryType += v + ' \n ';
        });
        console.log(this.queryType);
        this.hints = 'VoiceCommander => ' + this.queryType + '.';
        this.recognition.onresult = function (event) {
            var color = event.results[0][0].transcript;
            _this.diagnostic = 'VoiceCommander => Result => ' + color + '.';
            console.log('Confidence => ' + event.results[0][0].confidence);
            console.log('Diagnostic => ' + _this.diagnostic);
        };
        this.recognition.onspeechend = function (event) {
            _this.recognition.stop();
            console.log('VoiceCommander => Stoped ', event);
        };
        this.recognition.onnomatch = function (event) {
            _this.diagnostic = "I didn't recognise that color. event => " + event;
            console.warn('Voice commander event => nomatch => ' + _this.diagnostic);
        };
        this.recognition.onerror = function (event) {
            _this.diagnostic = 'Error occurred in recognition: ' + event;
            console.log(_this.diagnostic + ' onerror ' + _this.hints);
        };
    }
    VoiceCommander.prototype.run = function () {
        this.recognition.start();
        console.log('VoiceCommander => Ready to receive voice command.');
    };
    return VoiceCommander;
}());
exports.VoiceCommander = VoiceCommander;


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./class/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./class/main.ts */"./class/main.ts");


/***/ })

/******/ });