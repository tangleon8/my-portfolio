import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [assistantText, setAssistantText] = useState('');
  const OPENAI_API_KEY = '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';
  const chatWindowRef = useRef(null);

  useEffect(() => {
    fetch('/aboutme.txt')
      .then((res) => res.text())
      .then((data) => setAssistantText(data))
      .catch(() => {});
  }, []);

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          stream: true,
          messages: [
            { role: 'assistant', content: assistantText },
            ...newMessages
          ]
        })
      });
      if (!response.ok) throw new Error();
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      const updatedMessages = [...newMessages, { role: 'assistant', content: '' }];
      setMessages(updatedMessages);
      let contentSoFar = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim().startsWith('data:'));
        for (const line of lines) {
          const messageData = line.replace(/^data:\s*/, '');
          if (messageData === '[DONE]') break;
          try {
            const json = JSON.parse(messageData);
            const token = json.choices?.[0]?.delta?.content;
            if (token) {
              contentSoFar += token;
              updatedMessages[updatedMessages.length - 1].content = contentSoFar;
              setMessages([...updatedMessages]);
            }
          } catch {}
        }
      }
    } catch {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Oops, something went wrong. Please try again.' }
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      }, 100);
    }
  };

  return (
    <div className="fancy-chat-section">
      <div className="fancy-chat-container">
        <div className="chatbot-header">
          <h2 className="chatbot-title">Ask Leon Anything</h2>
        </div>
        <div className="fancy-chat-window" ref={chatWindowRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.role === 'assistant' ? 'bot' : 'user'}`}
            >
              <div className="avatar">
                {msg.role === 'assistant' ? '🤖' : '👤'}
              </div>
              <div className="text">
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            className="chat-input"
            type="text"
            placeholder="Type your question about Leon..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            disabled={loading}
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
