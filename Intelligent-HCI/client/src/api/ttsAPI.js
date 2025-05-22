import axiosInstance from './axiosInstance';

export const requestTTS = async (text) => {
  const response = await axiosInstance.post('/tts', { text });
  return `http://localhost:5001${response.data.url}`;
};