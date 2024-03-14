import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {

    const [message, setMessage] = useState('');
    const [botReply, setBotReply] = useState('');
    const handleChat = async () => {
        try {
            const response = await axios.post('/api/chat', {
                prompt: message
            });
            console.log(response);
            setBotReply(response.data.reply);
        } catch (error) {
            console.error(error);
        }
    };
    const inputStyle = {
        width: '400px',
        height: '100px',
        borderRadius: '12px',
    }
    return (
        <div className='bot-container'>
            <div className='container chatbot-question'>
                <h1>Chat Bot</h1>
                <textarea
                    style={inputStyle}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleChat}>Send</button>
                <p>{botReply}</p>
            </div>
            <div className='container chatbot-answer'>
                <h1>Chat Response</h1>
                <textarea
                    style={inputStyle}
                    value={botReply}
                />
            </div>
        </div>
    );

}

export default ChatBot
