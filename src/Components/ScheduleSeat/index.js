import { useState } from "react";
import styled from "styled-components";

import { Seat } from "./Seat";

export function ScheduleSeat () {
    const [nameSchedule, setNameSchedule] = useState("");
    const [cpf, setCpf] = useState("");
    
    return(
        <div style={{marginBottom: "8rem"}}>
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
                <div>
                    <div className="seat selected"></div>
                    <span>Selecionado</span>
                </div>
                <div>
                    <div className="seat"></div>
                    <span>Disponível</span>
                </div>
                <div>
                    <div className="seat na"></div>
                    <span>Indisponível</span>
                </div>
            </SeatLegend>

            <form onSubmit={1}>
                <FormDiv>
                    <label for="name-buyer">Nome do comprador:</label>
                    <input type="text" placeholder="Digite seu nome..." value={nameSchedule} onChange={e => (e.target.value)} id="name-buyer" />
                    <label for="cpf-buyer">CPF do comprador:</label>
                    <input type="password" placeholder="Digite seu CPF..." value={cpf} onChange={e => (e.target.value)} id="cpf-buyer" />
                </FormDiv>
                <FormDiv button={true}>
                    <button type="submit">Reservar assentos(s)</button>
                </FormDiv>
            </form>
        </div>
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

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 3rem;
        justify-content: space-between;
    }

    .seat {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1rem;
        background-color: #c3cfd9;
        border: 1px solid #7b8b99;        
    }
    
    .na {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
    
    .selected {
        background-color: #8DD7CF;
        border: 1px solid #1aae9e;
    }
`

const FormDiv = styled.div`
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.button? 'center' : 'left'};
    width: 80%;
    margin: 0 auto;

    button {
        margin: 2rem 0;
        width: 10rem;
        height: 3rem;
        color:white;
        background-color: #E8833A;
        border: none;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
    }

    label {
        margin: 0.5rem 0;
    }

    input {
        height: 2.5rem;
        line-height: 1.8rem;
        font-size: 1.1rem;
        font-style: italic;
        margin-bottom: 0.4rem;
    }
`