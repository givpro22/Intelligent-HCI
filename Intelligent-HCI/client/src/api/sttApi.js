import axiosInstance from './axiosInstance';

export const sendAudioToSTT = async (audioBlob) => {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'input.wav');

  const response = await axiosInstance.post('/stt', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.text;
};
