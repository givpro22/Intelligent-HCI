import React, { useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';

function HomePage() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const userMsg = { sender: 'user', text };
    const botMsg = { sender: 'bot', text: `Echo: ${text}` };
    setMessages((prev) => {
      const updated = [...prev, userMsg];
      return [...updated, botMsg];
    });
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">💬 Chat with AI</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default HomePage;