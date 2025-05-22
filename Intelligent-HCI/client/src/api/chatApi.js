export const sendChatMessage = async (message) => {
  const response = await fetch('http://localhost:5001/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch chat response');
  }

  const data = await response.json();
  return data.text;
};