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
            <img src='./src/utils/about-bg.jpg' className='fixed blur-md h-100 w-100 z-[-1]'></img>
            <Navbar />
            <div className='bot-container container p-4 '>
                <h1 className='text-2xl mb-3'>Chat Bot</h1>
                <div className="breakpoint">
                    <div className="area-and-btn">
                        <p className='text-xl mb-2'>Ask me anything!</p>
                        <textarea
                            value={message}
                            className='text-black rounded-md'
                            rows={6}
                            cols={35}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={handleChat} className='chatbot-border border-2 py-2  border-white hover:bg-gray-950'>Send</button>
                    </div>
                    <img src="../src/utils/line2.png" alt="" />
                    <p className='response text-xl mb-2'>Response: </p>
                    <div className='response-text'>
                        {botReply}
                    </div>
                </div>
            </div >
        </>
    );
}

export default ChatBot
