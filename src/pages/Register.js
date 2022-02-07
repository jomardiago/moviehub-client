import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginRegisterContainer from '../components/LoginRegisterContainer';
import CoverImg from '../assets/cinema-cover.jpg';

function Register() {
    return (
        <LoginRegisterContainer>
            <img src={CoverImg} alt="MovieHub" />
            <h1>MovieHub</h1>
            <form>
                <div>
                    <input type="text" placeholder="Username" />
                </div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" />
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
