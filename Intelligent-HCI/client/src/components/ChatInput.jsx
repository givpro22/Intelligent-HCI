import React, { useState } from 'react';

const ChatInput = ({ onSend, sttResult }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(input || sttResult)?.trim()) return;
    onSend(input || sttResult);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={input || sttResult || ''}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
        >
          전송
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
