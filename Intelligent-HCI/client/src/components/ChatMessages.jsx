import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="h-72 overflow-y-auto mb-4 border border-gray-300 p-4 rounded-md bg-white shadow">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
          <span className="font-semibold">{msg.sender === 'user' ? '👤 나' : '🤖 챗봇'}:</span> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
