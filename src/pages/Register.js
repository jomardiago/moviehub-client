import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import LoginRegisterContainer from '../components/LoginRegisterContainer';
import CoverImg from '../assets/cinema-cover.jpg';

function Register() {
    const { login } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData } }) {
            login(userData);
            navigate('/', { replace: true });
        },
        onError(err) {
            console.log(err);
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: { username, email, password, confirmPassword }
    });

    const handleSubmit = e => {
        e.preventDefault();
        registerUser();
    };

    return (
        <LoginRegisterContainer>
            <img src={CoverImg} alt="MovieHub" />
            <h1>MovieHub</h1>
            { loading && <p>Loading...</p> }
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
            { Object.keys(errors).length > 0 && <div>{ JSON.stringify(errors) }</div> }
            <div>
                <p>Already a member? <Link to="/login">Login</Link>.</p>
            </div>
        </LoginRegisterContainer>
    );
}

const REGISTER_USER = gql`
    mutation register($username: String! $email: String! $password: String! $confirmPassword: String!) {
        register(registerInput: { username: $username, email: $email, password: $password, confirmPassword: $confirmPassword }) {
            id
            username
            email
            createdAt
            token
        }
    }
`;

export default Register;
