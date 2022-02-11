import styled from 'styled-components';

const LoginRegisterContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 70%;
        width: 50%;
        position: absolute;
        bottom: 100px;
        left: -50px;
        z-index: -1;
    }

    h1 {
        font-size: 2.5rem;
        color: var(--red);
    }

    input {
        width: 300px;
        height: 50px;
        margin: .5rem 0;
        border: 2px solid var(--black);
        padding: 0 1rem;
        border-radius: 5px;
        font-size: 1.2rem;
    }

    button {
        width: 300px;
        height: 50px;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        margin: .5rem 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        background-color: var(--red);
        cursor: pointer;
        color: var(--white);
    }

    p {
        margin: .5rem 0;
    }

    a {
        color: var(--red);
        text-decoration: underline;
        font-weight: 600;
    }

    .error {
        color: red;
        font-weight: 500;
    }
`;

export default LoginRegisterContainer;