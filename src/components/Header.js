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
        margin-left: 1rem;
        flex: 2;
    }

    .header-controls {
        margin-right: 1rem;
        flex: 1;
        display: flex;
        justify-content: flex-end;
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
