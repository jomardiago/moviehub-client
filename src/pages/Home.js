import styled from 'styled-components';

const HomeContainer = styled.div`
    margin: 1rem 2rem;
    display: flex;

    .movie-panel {
        flex: 2;
    }

    .movie-info {
        flex: 1;
    }
`;

function Home() {
    return (
        <HomeContainer>
            <div className="movie-panel">
                Movie Panel Container
            </div>
            <div className="movie-info">
                Movie Info Container
            </div>
        </HomeContainer>
    );
}

export default Home;
