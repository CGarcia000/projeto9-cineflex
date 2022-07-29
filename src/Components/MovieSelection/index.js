import styled from "styled-components";

import { Movie } from "./Movie";


export function MovieSelection () {
    return(
        <>
            <Title>
                Selecione o filme
            </Title>

            <Movies>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </Movies>
        </>
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
`;