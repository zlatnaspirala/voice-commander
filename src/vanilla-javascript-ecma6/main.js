
/**
 * Typescript variant of VoiceCommander
 * class model.
 */

import { VoiceCommander } from './voice-commander.js'
import { colorNamesGrammars } from './grammar-set/colors.js'

const options = {
  grammarData: colorNamesGrammars,
  callback: (r) => {

    console.log(r)

  }
}

const VoiceCommanderInstance = new VoiceCommander(options)

console.log(VoiceCommanderInstance)

VoiceCommanderInstance.run()
