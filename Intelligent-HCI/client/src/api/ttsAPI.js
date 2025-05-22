export const requestTTS = async (text) => {
  const response = await fetch('http://localhost:5001/api/tts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('TTS 요청 실패');
  }

  const data = await response.json();
  return `http://localhost:5001${data.url}`;
};