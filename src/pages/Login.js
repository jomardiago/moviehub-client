import React from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import gql from 'graphql-tag';
import LoginRegisterContainer from '../components/LoginRegisterContainer';
import CoverImg from '../assets/cinema-cover.jpg';

function Login() {
    const { login } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            login(userData);
            navigate('/', { replace: true });
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: { username, password }
    });

    const handleSubmit = e => {
        e.preventDefault();
        loginUser();
    }

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
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            { Object.keys(errors).length > 0 && <div>{ JSON.stringify(errors) }</div> }
            <div>
                <p>Not yet a member? <Link to="/register">Register</Link>.</p>
            </div>
        </LoginRegisterContainer>
    );
}

export default Login;

const LOGIN_USER = gql`
    mutation login($username: String! $password: String!) {
        login(loginInput: {username: $username, password: $password}) {
            id
            username
            token
        }
    } 
`;
