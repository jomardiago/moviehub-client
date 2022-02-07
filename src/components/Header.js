import styled from 'styled-components';

const HeaderContainer = styled.header`
    color: var(--secondaryColor);
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        margin-right: 1rem;
        font-family: 'Poppins', sans-serif;
        background-color: var(--red);
        border: none;
        color: var(--primary);
        font-weight: 500;
        width: 150px;
        height: 40px;
    }
`;

function Header({ toggleTheme, theme, isAuthenticated }) {
    return (
        <HeaderContainer>
            {
                isAuthenticated ? (
                    <div>
                        <button onClick={toggleTheme}>{ theme === 'light-theme' ? 'Lights Off' : 'Lights On' }</button>
                    </div>
                ) : null
            }
        </HeaderContainer>
    );
}

export default Header;
