import axiosInstance from './axiosInstance';

export const requestTTS = async (text, voiceGender, voiceSpeed) => {
  const response = await axiosInstance.post('/tts', { text, voiceGender, voiceSpeed });
  return `http://localhost:5001${response.data.url}`;
};