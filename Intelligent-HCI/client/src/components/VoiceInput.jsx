import React from 'react';
import { useRecorder } from '../hooks/useRecorder';

const VoiceInput = ({ onResult }) => {
  const { startRecording, recording } = useRecorder(onResult);

  return (
    <div className="mt-4 text-center">
      <button
        onClick={startRecording}
        className={`px-4 py-2 rounded text-white ${recording ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
        disabled={recording}
      >
        {recording ? '녹음 중...' : '🎤 음성 입력'}
      </button>
    </div>
  );
};

export default VoiceInput;