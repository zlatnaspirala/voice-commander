/**
 * Typescript variant of VoiceCommander
 * class model.
 */

export interface VoiceCommanderInputInterface {
  grammarData: string[],
  callback(r: unknown): void
}

export class VoiceCommander {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent

  private recognition: SpeechRecognition;
  private speechRecognitionList: SpeechGrammarList;

  private grammarData: Array<unknown>;

  private grammar = '';
  private queryType: string;

  /**
   * @description Output data objects
   * diagnostic -> about status
   */
  private diagnostic = '';
  private hints = '';

  constructor (options: VoiceCommanderInputInterface) {

    if (typeof options !== 'undefined') {

      this.grammarData = options.grammarData

    }

    this.grammar = '#JSGF V1.0; grammar grammarData; public <color> = ' + this.grammarData.join(' | ') + ' ;'
    this.recognition = new this.SpeechRecognition()
    this.speechRecognitionList = new this.SpeechGrammarList()

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
      const color = event.results[0][0].transcript
      this.diagnostic = 'VoiceCommander => Result => ' + color + '.'
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

  public run (): void {

    this.recognition.start()
    console.log('VoiceCommander => Ready to receive voice command.')

  }

}
