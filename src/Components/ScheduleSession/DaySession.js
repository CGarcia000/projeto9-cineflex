import { Link } from "react-router-dom";
import styled from "styled-components";


export function DaySession({
    dayObj,
}) {
    return (
        <>
            <Day>
                {dayObj.weekday} - {dayObj.date}
            </Day>

            <ButtonsSessionHour>
                {dayObj.showtimes.map(showtime => {
                    return (
                    <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                        <button>{showtime.name}</button>
                    </Link>
                    );
                })}
            </ButtonsSessionHour>
        </>
    );
}

const Day = styled.div`
    font-size: 1.25rem;
    margin: 1.5rem 
`

const ButtonsSessionHour = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 1.5rem;
    margin-left: 0.5rem;
    

    button{
        margin-left: 1rem;
        width: 4.5rem;
        height: 2.5rem;
        color: white;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
`