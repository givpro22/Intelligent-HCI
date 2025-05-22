import React from 'react'
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>🧠 Intelligent Chatbot</h1>
      <p>음성으로 대화하는 AI 챗봇을 시작해보세요</p>
      <button
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/home')}
      >
        시작하기
      </button>
    </div>
  );
}

export default StartPage