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
      case 'what are you doing?':
        responseText = 'Right now I am trying to assist you! How about you?';
        break;
      case 'what is your name?':
        responseText = 'I am a chatbot created by you. You can call me ChatBot!';
        break;
      case 'what can you do?':
        responseText = 'I can chat with you and answer simple questions. Try asking me something!';
        break;
      case 'tell me a joke':
        responseText = 'Why did the scarecrow win an award? Because he was outstanding in his field!';
        break;
      case 'what is the weather like?':
        responseText = 'I am not connected to the internet, so I can\'t provide weather updates.';
        break;
      case 'goodbye':
        responseText = 'Goodbye! Have a great day!';
        break;
      case 'thank you':
        responseText = 'You\'re welcome!';
        break;
      case 'what is your favorite color?':
        responseText = 'I like blue. It\'s calm and cool!';
        break;
      case 'how old are you?':
        responseText = 'I am timeless, as I exist in the digital world!';
        break;
      case 'where do you live?':
        responseText = 'I live in the cloud, ready to assist you anytime!';
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
