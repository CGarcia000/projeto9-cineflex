import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer";

import { DaySession } from './DaySession';


export function ScheduleSession ({
    movie
}) {
    const [days, setDays] = useState([]);

    const {idFilme} = useParams();

    useEffect(()=> {
        const sessionsPromise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        // sessionsPromise.then(res => {
        //     setDays(res.data.days);
        // }).catch(e => console.log(e));
    }, []);

    console.log(days);

    return(
        <>
        <div style={{marginBottom: '11rem'}}> {/* 8 + 3 rem */}
            <Title>
                Selecione o horário
            </Title>

            {days.map(day => <DaySession key={day.id} dayObj={day}/> )}
            
        </div>
        <Footer />
        </>
    );
}

const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;
