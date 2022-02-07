import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-size: 2.5rem;
        color: var(--red);
    }

    input {
        width: 300px;
        height: 50px;
        margin: .5rem 0;
        border: 2px solid var(--primaryColor);
        padding: 0 1rem;
        border-radius: 5px;
        font-size: 1.2rem;
    }

    button {
        width: 300px;
        height: 50px;
        border: 1px solid var(--secondaryColor);
        border-radius: 5px;
        font-size: 1.2rem;
        margin: .5rem 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        background-color: var(--red);
        cursor: pointer;
        color: var(--primaryColor);
    }

    p {
        margin: .5rem 0;
    }

    a {
        color: var(--red);
        text-decoration: underline;
        font-weight: 600;
    }
`;

function Register() {
    return (
        <RegisterContainer>
            <h1>MovieHub</h1>
            <form>
                <div>
                    <input type="text" placeholder="Username" />
                </div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <input type="text" placeholder="Confirm Password" />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
            <div>
                <p>Already a member? <Link to="/login">Login</Link>.</p>
            </div>
        </RegisterContainer>
    );
}

export default Register;
