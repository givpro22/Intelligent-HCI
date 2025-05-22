import React, { useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import VoiceInput from '../components/VoiceInput';
import { sendChatMessage } from '../api/chatApi';

function HomePage() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const responseText = await sendChatMessage(text);
      const botMsg = { sender: 'bot', text: responseText };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg = { sender: 'bot', text: '❌ 오류가 발생했습니다.' };
      setMessages((prev) => [...prev, botMsg]);
      console.error('Chat API error:', error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">💬 Chat with AI</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
      <VoiceInput onResult={handleSend} />
    </div>
  );
}

export default HomePage;