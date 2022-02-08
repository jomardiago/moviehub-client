import { Link } from 'react-router-dom';
import LoginRegisterContainer from '../components/LoginRegisterContainer';
import CoverImg from '../assets/cinema-cover.jpg';

function Login() {
    return (
        <LoginRegisterContainer>
            <img src={CoverImg} alt="MovieHub" />
            <h1>MovieHub</h1>
            <form>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <div>
                <p>Not yet a member? <Link to="/register">Register</Link>.</p>
            </div>
        </LoginRegisterContainer>
    );
}

export default Login;
