const fs = require('fs');
const path = require('path');
const speech = require('@google-cloud/speech');

const client = new speech.SpeechClient();

const recognizeSpeech = async (filePath) => {
  const file = fs.readFileSync(filePath);
  const audioBytes = file.toString('base64');

  const audio = {
    content: audioBytes,
  };

  const config = {
    encoding: 'WEBM_OPUS',   // 변경
    sampleRateHertz: 48000, 
    languageCode: 'ko-KR',
  };

  const request = {
    audio,
    config,
  };

  const [response] = await client.recognize(request);
  const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');

  console.log('[STT] Transcription result:', transcription);

  return transcription;
};

module.exports = recognizeSpeech;