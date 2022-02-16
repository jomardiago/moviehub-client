import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const today = new Date().toDateString();
const dummyData = [
    { 
        id: 1, 
        imgUrl: "https://c8.alamy.com/comp/H6B056/denzel-washington-poster-the-equalizer-2014-H6B056.jpg",
        title: "Equalizer",
        genre: "Action",
        year: "2020",
        username: "josediago",
        createdAt: today 
    },
    { 
        id: 2, 
        imgUrl: "https://m.media-amazon.com/images/I/51zeLk5jC3L._AC_SX466_.jpg",
        title: "The Godfather",
        genre: "Action | Mafia",
        year: "1993",
        username: "josediago",
        createdAt: today 
    },
    { 
        id: 3, 
        imgUrl: "https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg",
        title: "Taken",
        genre: "Action | Family",
        year: "2017",
        username: "josediago",
        createdAt: today
    },
    { 
        id: 4, 
        imgUrl: "https://c8.alamy.com/comp/2F0GYT2/movie-poster-spider-man-far-from-home-2019-2F0GYT2.jpg",
        title: "SpiderMan Far From Home",
        genre: "Action | Comedy",
        year: "2019",
        username: "josediago",
        createdAt: today
    },
    { 
        id: 5, 
        imgUrl: "https://i.pinimg.com/736x/92/88/dd/9288ddacb911f5efdc6e8dbfbf07e920--beautiful-mind-true-stories.jpg",
        title: "A Beautiful Mind",
        genre: "Biographical | Drama",
        year: "2002",
        username: "mariakarena",
        createdAt: today
    },
    { 
        id: 6, 
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg",
        title: "Train To Busan",
        genre: "Action | Zombies",
        year: "2018",
        username: "mariakarena",
        createdAt: today
    }
];

const HomeContainer = styled.div`
    margin: 1rem;
    display: flex;

    .movie-panel {
        flex: 3;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .movie-details {
        flex: 1;
        margin-top: 1rem;
    }
`;

function Home() {
    return (
        <HomeContainer>
            <div className="movie-panel">
                {
                    dummyData.map(data => <MovieCard key={data.id} {...data} />)
                }
            </div>
            <div className="movie-details">
                Movie Info Container
            </div>
        </HomeContainer>
    );
}

export default Home;
