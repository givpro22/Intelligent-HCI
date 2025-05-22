import React from 'react'
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-10 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-violet-700">🧠 지능HCI 과제</h1>
        <h2 className="text-2xl font-semibold text-gray-800">대화형 Chatbot 만들기</h2>
        <p className="text-gray-600">음성으로 대화하는 AI 챗봇을 시작해보세요</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>전남대학교 인공지능학부 213945 박영서</p>
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
          onClick={() => navigate('/home')}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default StartPage