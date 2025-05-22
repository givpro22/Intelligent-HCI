import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="h-72 overflow-y-auto mb-4 border border-gray-300 p-4 rounded-md bg-white shadow space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`inline-block px-4 py-2 rounded-lg max-w-xs break-words ${
              msg.sender === 'user'
                ? 'bg-violet-100 text-right text-violet-800'
                : 'bg-gray-200 text-left text-gray-800'
            }`}
          >
            <span className="block text-sm font-semibold mb-1">
              {msg.sender === 'user' ? '👤 나' : '🤖 챗봇'}
            </span>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
