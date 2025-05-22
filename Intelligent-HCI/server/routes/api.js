const express = require('express');
const multer = require('multer');
const fs = require('fs');
const recognizeSpeech = require('../controllers/sttController');
const getChatResponse = require('../controllers/chatController');
const synthesizeSpeech = require('../controllers/ttsController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// STT: 음성 → 텍스트
router.post('/stt', upload.single('audio'), async (req, res) => {
  try {
    const transcript = await recognizeSpeech(req.file.path);
    fs.unlinkSync(req.file.path); // clean up uploaded file
    res.json({ text: transcript });
  } catch (error) {
    res.status(500).json({ error: 'STT failed', detail: error.toString() });
  }
});

// TTS: 텍스트 → 음성
router.post('/tts', async (req, res) => {
  try {
    const { text, voiceGender, voiceSpeed } = req.body;
    const filePath = await synthesizeSpeech(text, voiceGender, voiceSpeed);
    const fileName = filePath.split('/').pop();
    res.json({ url: `/tts_output/${fileName}` });
  } catch (error) {
    res.status(500).json({ error: 'TTS failed', detail: error.toString() });
  }
});

// GPT: 텍스트 → 응답 생성
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await getChatResponse(message);
    res.json({ text: reply });
  } catch (error) {
    res.status(500).json({ error: 'GPT failed', detail: error.toString() });
  }
});

module.exports = router;