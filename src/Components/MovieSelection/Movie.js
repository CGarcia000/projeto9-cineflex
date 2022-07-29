import styled from "styled-components";

import enola from '../../assets/img/enola.png'
import filme2067 from '../../assets/img/2067filme.png'


export function Movie () {
    return(
        <>
            <Wrapper>
                <img src={enola} alt="descrição do filme" />
                {/* <img src={filme2067} alt="descrição do filme" /> */}
            </Wrapper>
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

    img {
        width: 9rem;
        height: auto;
    }
`