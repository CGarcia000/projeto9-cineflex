import { Link } from "react-router-dom";
import styled from "styled-components";   

export function Movie ({
    movieObj,
}) {
    return(
        <>
            <Link to={`/sessoes/${movieObj.id}`} >
                <Wrapper>
                    <img src={movieObj.posterURL} alt={movieObj.title} />
                </Wrapper>
            </Link>
        </>
    );
}

const Wrapper = styled.div`
    width: 10rem;
    height: 15rem;
    border-radius: 3px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 0 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 9rem;
        height: auto;
    }
`