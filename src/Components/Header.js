import React from "react";
import styled from "styled-components";


export function Header() {
    return (
        <Wrapper>
            Cineflex
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #C3CFD9;
    color: #e8833a;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
`