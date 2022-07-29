import React from "react";
import styled from "styled-components";


// props - img, nome

export function Footer() {
    return (
        <Wrapper>
            teste
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
`