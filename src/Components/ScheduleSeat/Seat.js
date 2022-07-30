import styled from "styled-components";


export function Seat() {
    return(
        <>
           <SeatButton isAvaliable={false}>
                {1}
           </SeatButton>
        </>
    );
}

const SeatButton = styled.div`
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    font-size: 12px;
    background-color: ${props => props.isAvaliable ? '#c3cfd9' : '#FBE192' };
    border: 1px solid ${props => props.isAvaliable ? '#7B8B99' : '#F7C52B' };
`


