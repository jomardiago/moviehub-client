import React from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/auth';

const HeaderContainer = styled.header`
    background-color: var(--red);
    color: var(--white);
    height: 60px;
    display: flex;
    align-items: center;

    h1 {
        margin-left: 2rem;
        flex: 2;
    }

    .header-controls {
        margin-right: 2rem;
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    button {
        padding .5rem 2rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        background-color: var(--white);
        cursor: pointer;
        color: var(--red);
    }
`;

function Header({ isAuthenticated }) {
    const { logout } = React.useContext(AuthContext);

    return (
        <React.Fragment>
            {
                isAuthenticated && (
                    <HeaderContainer>
                        <h1>MovieHub</h1>
                        <div className="header-controls">
                            <button onClick={logout}>Logout</button>
                        </div>
                    </HeaderContainer>
                )
            }
        </React.Fragment>
    );
}

export default Header;
