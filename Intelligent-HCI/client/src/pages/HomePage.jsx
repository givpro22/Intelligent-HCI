import React, { useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import VoiceInput from '../components/VoiceInput';

function HomePage() {
  const [messages, setMessages] = useState([]);
  const [sttResult, setSttResult] = useState('');

  const handleSend = (text) => {
    const userMsg = { sender: 'user', text };
    const botMsg = { sender: 'bot', text: `Echo: ${text}` };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setSttResult('');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">💬 Chat with AI</h1>
      {sttResult && (
        <div className="text-sm text-gray-600 mb-2 text-center">
          🎧 변환된 음성 입력: <span className="font-medium">{sttResult}</span>
          <button
            className="ml-2 px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600"
            onClick={() => handleSend(sttResult)}
          >
            전송
          </button>
        </div>
      )}
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
      <VoiceInput onResult={(text) => setSttResult(text)} />
    </div>
  );
}

export default HomePage;