/**
 * Vanilla JavaScript ECMA6 variant of VoiceCommander
 * class model.
 */

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
// var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

class VoiceCommander {

  constructor (options) {

    this.grammarData = [];
    this.queryType = '';

    if (typeof options !== 'undefined' &&
        typeof options.grammarData !== 'undefined') {

      this.grammarData = options.grammarData

    }

    if (typeof options !== 'undefined' &&
        typeof options.callback !== 'undefined') {

      this.callback = options.callback

    }


    this.grammar = '#JSGF V1.0; grammar grammarData; public <color> = ' + this.grammarData.join(' | ') + ' ;'
    this.recognition = new SpeechRecognition()
    this.speechRecognitionList = new SpeechGrammarList()

    this.speechRecognitionList.addFromString(this.grammar, 1)
    this.recognition.grammars = this.speechRecognitionList
    this.recognition.continuous = false

    /**
     * @description Must be 'en-US'
     * because firefox native support limitation.
     */
    this.recognition.lang = 'en-US'

    this.recognition.interimResults = false
    this.recognition.maxAlternatives = 1

    this.queryType = ''

    this.grammarData.forEach((v) => {

      this.queryType += v + ' \n '

    })

    console.log(this.queryType)
    this.hints = 'VoiceCommander => ' + this.queryType + '.'

    this.recognition.onresult = (event) => {

      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object
      const r = event.results[0][0].transcript
      this.diagnostic = 'VoiceCommander => Result => ' + r + '.'

      if (typeof this.callback !== 'undefined') {
        this.callback(r)
      }
      // bg.style.backgroundColor = color;
      console.log('Confidence => ' + event.results[0][0].confidence)
      console.log('Diagnostic => ' + this.diagnostic)

    }

    this.recognition.onspeechend = (event) => {

      this.recognition.stop()
      console.log('VoiceCommander => Stoped ', event)

    }

    this.recognition.onnomatch = (event) => {

      this.diagnostic = "I didn't recognise that color. event => " + event
      console.warn('Voice commander event => nomatch => ' + this.diagnostic)

    }

    this.recognition.onerror = (event) => {

      this.diagnostic = 'Error occurred in recognition: ' + event
      console.log(this.diagnostic + ' onerror ' + this.hints)

    }

  }

  run () {

    // Better than flag
    try {
      this.recognition.start()
    } catch(err) {
      console.log(err)
    } finally {
      console.log('VoiceCommander => Ready to receive voice command.')
    }

  }

}

export { VoiceCommander }
