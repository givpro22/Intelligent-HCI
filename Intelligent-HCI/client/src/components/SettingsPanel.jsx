import React, { useState } from 'react';

const SettingsPanel = ({ onSettingsChange }) => {
  const [voiceGender, setVoiceGender] = useState('NEUTRAL');
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);

  // Unified change handler: triggers onSettingsChange immediately on any change
  const handleChange = (updates) => {
    const newSettings = {
      voiceGender,
      voiceSpeed,
      ...updates,
    };
    if (updates.voiceGender !== undefined) setVoiceGender(updates.voiceGender);
    if (updates.voiceSpeed !== undefined) setVoiceSpeed(updates.voiceSpeed);
    onSettingsChange(newSettings);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm">
      <h2 className="text-lg font-bold mb-2 text-violet-700">설정</h2>
      <div className="flex flex-col gap-2">
        <label>
          성별:
          <select
            value={voiceGender}
            onChange={(e) => handleChange({ voiceGender: e.target.value })}
            className="ml-2 border p-1 rounded"
          >
            <option value="NEUTRAL">중성</option>
            <option value="FEMALE">여성</option>
            <option value="MALE">남성</option>
          </select>
        </label>
        <label>
          속도:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={voiceSpeed}
            onChange={(e) => handleChange({ voiceSpeed: parseFloat(e.target.value) })}
            className="w-full"
          />
        </label>
        {/* 테마 선택 필드 삭제됨 */}
        {/* "적용" 버튼 제거됨: 변경사항이 즉시 반영됨 */}
      </div>
    </div>
  );
};

export default SettingsPanel;