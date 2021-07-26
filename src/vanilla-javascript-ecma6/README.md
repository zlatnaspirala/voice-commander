
# Voice-Commander
## ECMA6

## Install
```js
  npm i voice-commander --save
```

## Usage
```js
import { VoiceCommander, colorNamesGrammars } from 'voice-commander'

const options = {
  grammarData: colorNamesGrammars,
  callback: (r) => {
    if (r == "test") {
      alert("Test what ;) ?")
    }
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