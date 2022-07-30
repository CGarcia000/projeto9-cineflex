import styled from "styled-components";

import { Seat } from "./Seat";

export function ScheduleSeat () {
    return(
        <>
            <Title>
                Selecione o(s) assento(s)
            </Title>

            <Seats>
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />
                <Seat />

            </Seats>
            <SeatLegend>
                <div className="Selected"></div>
                <div></div>
                <div className="NA"></div>
            </SeatLegend>
        </>
    );
}


const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const Seats = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    margin: 2rem;
`;

const SeatLegend = styled.div`
    display: flex;
    margin: 1rem 0;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        background-color: #c3cfd9;
        border: 1px solid #7b8b99;        
    }
    
    .NA {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
    
    .Selected {
        background-color: #8DD7CF;
        border: 1px solid #1aae9e;
    }
`