export const sendAudioToSTT = async (audioBlob) => {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'input.wav');

  const response = await fetch('http://localhost:5001/api/stt', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch STT response');
  }

  const data = await response.json();
  return data.text;
};
