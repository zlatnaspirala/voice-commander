
/**
 * Tradicional Javascript variant of VoiceCommander
 */

const options = {
  grammarData: colorNamesGrammars,
  callback: function(r) {

    console.log(r)

  }
}

const VoiceCommanderInstance = new VoiceCommander(options)

console.log(VoiceCommanderInstance)

VoiceCommanderInstance.run()
