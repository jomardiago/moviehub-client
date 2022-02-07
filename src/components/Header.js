import styled from 'styled-components';

const HeaderContainer = styled.header`
    color: var(--secondaryColor);
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        margin-right: 1rem;
    }
`;

function Header({ toggleTheme }) {
    return (
        <HeaderContainer>
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </HeaderContainer>
    );
}

export default Header;
