
/**
 * Typescript variant of VoiceCommander
 * class model.
 */

import { VoiceCommanderInputInterface, VoiceCommander } from './voice-commander'
import { colorNamesGrammars } from './grammar-set/colors'

const options: VoiceCommanderInputInterface = {
  grammarData: colorNamesGrammars,
  callback: (r: unknown) => {

    console.log(r)

  }
}

const VoiceCommanderInstance = new VoiceCommander(options)

console.log(VoiceCommanderInstance)

VoiceCommanderInstance.run()
