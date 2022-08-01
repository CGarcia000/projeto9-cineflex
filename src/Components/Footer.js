import React from "react";
import styled from "styled-components";

export function Footer({
    movie,
    session
}) {
    return (
        <Wrapper>
            <MovieWrapper>
                <img src={movie.posterURL} alt={movie.title}/>
            </MovieWrapper>
            <div>
                <h3>{movie.title}</h3>
                {session ? (
                    <h4>{`${session.weekday} - ${session.time}`}</h4>
                ) : (
                    <></>
                )}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 8rem;
    width: 100%;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 1rem;

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-left: 1rem;
        height: 4rem;
        justify-content: space-evenly;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    h4 {
        font-size: 1.4rem;
        font-weight: 400;
    }
`

const MovieWrapper = styled.div`
    padding: 0.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 4rem;
        height: auto;
    }
`