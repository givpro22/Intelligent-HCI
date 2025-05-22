import React, { useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import VoiceInput from '../components/VoiceInput';
import SettingsPanel from '../components/SettingsPanel';
import { sendChatMessage } from '../api/chatApi';
import { requestTTS } from '../api/ttsAPI';

function HomePage() {
  const [messages, setMessages] = useState([]);
  const [settings, setSettings] = useState({
    voiceGender: 'NEUTRAL',
    voiceSpeed: 1.0,
    theme: 'light',
  });

  const handleSend = async (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const responseText = await sendChatMessage(text);
      const botMsg = { sender: 'bot', text: responseText };
      setMessages((prev) => [...prev, botMsg]);

      // TTS playback
      const audioUrl = await requestTTS(responseText, settings.voiceGender, settings.voiceSpeed);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      const botMsg = { sender: 'bot', text: '❌ 오류가 발생했습니다.' };
      setMessages((prev) => [...prev, botMsg]);
      console.error('Chat API or TTS error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <h1 className="text-3xl font-bold text-center text-violet-600">💬 Chat with AI</h1>
          <SettingsPanel onSettingsChange={setSettings} />
        </div>
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
        <VoiceInput onResult={handleSend} />
      </div>
    </div>
  );
}

export default HomePage;