(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorNamesGrammars = void 0;
const colorNamesGrammars = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
exports.colorNamesGrammars = colorNamesGrammars;

},{}],2:[function(require,module,exports){
"use strict";

var _voiceCommander = require("./voice-commander.js");

var _colors = require("./grammar-set/colors.js");

/**
 * ECMA6 variant of VoiceCommander
 * class model.
 */
const options = {
  grammarData: _colors.colorNamesGrammars,
  callback: r => {
    console.log(r);
  }
};
const VoiceCommanderInstance = new _voiceCommander.VoiceCommander(options);
console.log(VoiceCommanderInstance);
window.vc = VoiceCommanderInstance;
VoiceCommanderInstance.run();

},{"./grammar-set/colors.js":1,"./voice-commander.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoiceCommander = void 0;

/**
 * Vanilla JavaScript ECMA6 variant of VoiceCommander
 * class model.
 */
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList; // var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

class VoiceCommander {
  constructor(options) {
    this.grammarData = [];
    this.queryType = '';

    if (typeof options !== 'undefined' && typeof options.grammarData !== 'undefined') {
      this.grammarData = options.grammarData;
    }

    if (typeof options !== 'undefined' && typeof options.callback !== 'undefined') {
      this.callback = options.callback;
    }

    this.grammar = '#JSGF V1.0; grammar grammarData; public <color> = ' + this.grammarData.join(' | ') + ' ;';
    this.recognition = new SpeechRecognition();
    this.speechRecognitionList = new SpeechGrammarList();
    this.speechRecognitionList.addFromString(this.grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.continuous = false;
    /**
     * @description Must be 'en-US'
     * because firefox native support limitation.
     */

    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.queryType = '';
    this.grammarData.forEach(v => {
      this.queryType += v + ' \n ';
    });
    console.log(this.queryType);
    this.hints = 'VoiceCommander => ' + this.queryType + '.';

    this.recognition.onresult = event => {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object
      const r = event.results[0][0].transcript;
      this.diagnostic = 'VoiceCommander => Result => ' + r + '.';

      if (typeof this.callback !== 'undefined') {
        this.callback(r);
      } // bg.style.backgroundColor = color;


      console.log('Confidence => ' + event.results[0][0].confidence);
      console.log('Diagnostic => ' + this.diagnostic);
    };

    this.recognition.onspeechend = event => {
      this.recognition.stop();
      console.log('VoiceCommander => Stoped ', event);
    };

    this.recognition.onnomatch = event => {
      this.diagnostic = "I didn't recognise that color. event => " + event;
      console.warn('Voice commander event => nomatch => ' + this.diagnostic);
    };

    this.recognition.onerror = event => {
      this.diagnostic = 'Error occurred in recognition: ' + event;
      console.log(this.diagnostic + ' onerror ' + this.hints);
    };
  }

  run() {
    // Better than flag
    try {
      this.recognition.start();
    } catch (err) {
      console.log(err);
    } finally {
      console.log('VoiceCommander => Ready to receive voice command.');
    }
  }

}

exports.VoiceCommander = VoiceCommander;

},{}]},{},[2]);
