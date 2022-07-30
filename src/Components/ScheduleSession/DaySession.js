import styled from "styled-components";


export function DaySession() {
    return (
        <>
            <Day>
                {'Quinta-feira'} - {'24/06/2021'}
            </Day>

            <ButtonsSessionHour>
                {/* Colocar link no button */}
                <button>{'15:00'}</button>
                <button>{'15:00'}</button>
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