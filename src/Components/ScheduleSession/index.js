import styled from "styled-components";

import { DaySession } from './DaySession';


export function ScheduleSession () {
    return(
        <>
            <Title>
                Selecione o horário
            </Title>

            <DaySession />
            <DaySession />
            
        </>
    );
}

const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;
