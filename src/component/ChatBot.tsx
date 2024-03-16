import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [botReply, setBotReply] = useState('');
    const handleChat = async () => {
        try {
            const response = await axios.post('/api/chat', {
                prompt: message
            });
            console.log(response);
            setBotReply(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Navbar />
            <div className='bot-container container'>
                <h1>Chat Bot</h1>
                <div className="breakpoint">
                    <div className="area-and-btn">
                        <p>Ask me anything!</p>
                        <textarea
                            value={message}
                            rows={6}
                            cols={35}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={handleChat}>Send</button>
                    </div>
                    <img src="../src/utils/line2.png" alt="" />
                    <p className='response'>Response: </p>
                    <div className='response-text'>
                        {botReply}
                    </div>
                </div>
            </div >
        </>
    );

}

export default ChatBot
