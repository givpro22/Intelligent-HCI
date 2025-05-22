import { useState } from 'react';

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
      const formData = new FormData();
      formData.append('audio', blob, 'input.wav');

      const response = await fetch('http://localhost:5001/api/stt', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.text) {
        onResult(data.text);
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