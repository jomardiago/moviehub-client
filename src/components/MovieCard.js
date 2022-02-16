import styled from 'styled-components';

const MovieCardContainer = styled.div`
    font-size: .8rem;
    margin: 1rem;
    width: 300px;
    height: 400px;
    background-color: var(--red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 6px -5px 12px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px -5px 12px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px -5px 12px -1px rgba(0,0,0,0.75);

    .movie-image-container {
        width: 280px;
        height: 300px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .movie-info-container {
        width: 280px;
        height: 80px;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .movie-info-title {
            font-size: 1rem;
            font-weight: 700;
        }

        .movie-info-panel-container {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }
    }
`;

function MovieCard({ imgUrl, title, genre, year, username, createdAt }) {
    return (
        <MovieCardContainer>
            <div className="movie-image-container">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="movie-info-container">
                <p className="movie-info-title">{title}</p>
                <div className="movie-info-panel-container">
                    <div className="movie-info-left-panel">
                        <p className="movie-info-genre">{genre}</p>
                        <p className="movie-info-year">{year}</p>
                    </div>
                    <div className="movie-info-right-panel">
                        <span className="author-name">
                            <a href={`/${username}`}>{username}</a>
                        </span>
                        <p className="post-date">{createdAt}</p>
                    </div>
                </div>
            </div>
        </MovieCardContainer>
    );
}

export default MovieCard;
