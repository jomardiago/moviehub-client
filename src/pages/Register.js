import React from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterContainer from '../components/LoginRegisterContainer';
import CoverImg from '../assets/cinema-cover.jpg';

function Register() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ username, password, confirmPassword, email });
    };

    return (
        <LoginRegisterContainer>
            <img src={CoverImg} alt="MovieHub" />
            <h1>MovieHub</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        id="username"
                        name="username" 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
            <div>
                <p>Already a member? <Link to="/login">Login</Link>.</p>
            </div>
        </LoginRegisterContainer>
    );
}

export default Register;
