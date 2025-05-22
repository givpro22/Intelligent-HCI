import axiosInstance from './axiosInstance';

export const sendAudioToSTT = async (audioBlob) => {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'input.wav');

  const response = await axiosInstance.post('/stt', formData);
  return response.data.text;
};
