import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const LoginForm = () =>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID':" e0da00d4-c49e-4082-afe8-686f4f759c34 ", 'User-Name': username, 'User-Secret': password}

        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }catch(error){
            setError("🥺, Incorrect Login Details")
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
                <h2 className='error'>{error}</h2>
            </div>
        </div>
    )
}

export default LoginForm;