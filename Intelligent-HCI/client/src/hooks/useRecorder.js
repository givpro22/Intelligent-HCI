import { useState } from 'react';
import { sendAudioToSTT } from '../api/sttApi';

export const useRecorder = (onResult) => {
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(audioChunks, { type: 'audio/wav' });
      try {
        const text = await sendAudioToSTT(blob);
        if (text) {
          onResult(text);
        }
      } catch (error) {
        console.error('STT API error:', error);
      }
    };

    mediaRecorder.start();
    setRecording(true);
    setTimeout(() => {
      mediaRecorder.stop();
      setRecording(false);
    }, 4000);
  };

  return { startRecording, recording };
};