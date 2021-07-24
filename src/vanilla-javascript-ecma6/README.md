
# Voice-Commander
## ECMA6

## Install
```js
  npm i voice-commander
```

## Usage
```js
import { VoiceCommander } from './voice-commander.js'
import { colorNamesGrammars } from './grammar-set/colors.js'

const options = {
  grammarData: colorNamesGrammars,
  callback: (r) => {
    console.log(r);
  }
}

const VoiceCommanderInstance = new VoiceCommander(options)

console.log(VoiceCommanderInstance)

// If you want make it global
window.vc = VoiceCommanderInstance;

// Activate listen operation
VoiceCommanderInstance.run()
```