const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

const synthesizeSpeech = async (text, gender = 'NEUTRAL', speed = 1.0) => {
  const request = {
    input: { text },
    voice: { languageCode: 'ko-KR', ssmlGender: gender },
    audioConfig: { audioEncoding: 'MP3', speakingRate: speed },
  };

  const [response] = await client.synthesizeSpeech(request);
  const filePath = `tts_output/output-${Date.now()}.mp3`;
  await util.promisify(fs.writeFile)(filePath, response.audioContent, 'binary');
  return filePath;
};

module.exports = synthesizeSpeech;