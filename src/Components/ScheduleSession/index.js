import styled from "styled-components";

import { DaySession } from './DaySession';


export function ScheduleSession () {
    return(
        <div style={{marginBottom: "8rem"}}>
            <Title>
                Selecione o horário
            </Title>

            <DaySession />
            <DaySession />
            
        </div>
    );
}

const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;
