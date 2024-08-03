import React, { useState } from 'react';
import './ChatBot.css'; // Import CSS for styling

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);
    setUserInput('');
    
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  const getBotResponse = (input) => {
    let responseText;
    switch (input.toLowerCase()) {
      case 'hello':
        responseText = 'Hi there! How can I help you?';
        break;
      case 'how are you?':
        responseText = 'I am a bot, so I am always fine! How about you?';
        break;
      default:
        responseText = "I'm not sure how to respond to that.";
        break;
    }
    return { sender: 'bot', text: responseText };
  };

  return (
    <div className="chat-bot-container">
      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
