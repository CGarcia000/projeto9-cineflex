import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


import { Movie } from "./Movie";


export function MovieSelection () {
    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {
        const moviesPromise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        moviesPromise.then(res => {
            console.log(res);
            setMovies(res.data);
            console.log(res.data);
        }).catch(e => console.log(e)); 
    }, []);

//     {id,
//     overview,
//     poster,
//     releaseDate,
//     title,
// }
    console.log(movies[0]);
    return(
        <div style={{marginBottom: "8rem"}}>
            <Title>
                Selecione o filme
            </Title>

            <Movies>
                {movies.map(movie => <Movie key={movie.id} movieObj={movie}/>)}
            </Movies>
        </div>
    );
}

const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const Movies = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: calc(8rem + 3rem);
`;