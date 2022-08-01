import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Seat } from "./Seat";
import { Footer } from "../Footer";

export function ScheduleSeat ({
    setShouldRedirect,
    setScheduleObj,
}) {
    const [nameSchedule, setNameSchedule] = useState("");
    const [cpf, setCpf] = useState("");

    const [movie, setMovie] = useState({});
    const [session, setSession] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const {idSessao} = useParams();

    useEffect(() => {
        const sessionSchedulePromise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        sessionSchedulePromise.then(res => {
            setMovie({title: res.data.movie.title, posterURL: res.data.movie.posterURL});
            setSession({time: res.data.name, weekday: res.data.day.weekday});
            setSeats(res.data.seats);
            setScheduleObj({
                movie: {
                    name: res.data.movie.title,
                },
                session: {
                    date: res.data.day.date,
                    time: res.data.name,
                }
            })
        }).catch(e => console.log(e));
    }, [])

    function HandleSchedule(e) {
        e.preventDefault();

        if (selectedSeats.length === 0) return alert('Selecione pelo menos 1 assento');

        const schedulePromise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', {
            ids: selectedSeats,
            name: nameSchedule,
            cpf: cpf.replace(/\./g, '').replace(/-/g, ''),
        });

        const arrSeatsNumbers = findSeatsNames(selectedSeats);

        schedulePromise.then(res => {
            setScheduleObj(current => ({
                ...current, 
                seats: arrSeatsNumbers,
                buyer: {
                    name: nameSchedule,
                    cpf,
                },
            }));
            setShouldRedirect(current => !current);
        }).catch(e => {
            console.log(e);
            alert('Um erro inesperado ocorreu');
        })
    }

    function findSeatsNames(arrSeats) {
        const arrSeatsNames = [];
        for (let i=0; i < arrSeats.length; i++) {
            arrSeatsNames.push(seats.find((obj) => obj.id === arrSeats[i]).name)
        }
        return arrSeatsNames;
    }

    function cpfMask(e) {
        return setCpf(e.target.value.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2') 
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1'));
    }
    
    return(
        <>
            <div style={{marginBottom: "8rem"}}>
                <Title>
                    Selecione o(s) assento(s)
                </Title>

                <Seats>
                    {seats.map(seat => <Seat key={seat.id} seatObj={seat} setSelectedSeats={setSelectedSeats}/>)}
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

                <form onSubmit={HandleSchedule}>
                    <FormDiv>
                        <label forhtml="name-buyer">Nome do comprador:</label>
                        <input type="text" placeholder="Digite seu nome..." 
                            value={nameSchedule} onChange={e => setNameSchedule(e.target.value)} 
                            id="name-buyer" maxLength={128} required/>
                        <label forhtml="cpf-buyer">CPF do comprador:</label>
                        <input type="text" placeholder="Digite seu CPF..." 
                            value={cpf} onChange={cpfMask} 
                            id="cpf-buyer" required/>
                    </FormDiv>
                    <FormDiv button={true}>
                        <button type="submit">Reservar assentos(s)</button>
                    </FormDiv>
                </form>
            </div>

            <Footer movie={movie} session={session} />
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