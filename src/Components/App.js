
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { useState } from "react"

import GlobalStyle from "../assets/css/GloballStyle"

import { MovieSelection } from './MovieSelection'
import { ScheduleSession } from './ScheduleSession'
import { ScheduleSeat } from './ScheduleSeat'
import { RequestMade } from './RequestMade'
import { Header } from './Header'


export default function App() {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    return (
        <>
            <GlobalStyle />
            
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MovieSelection />} />
                    <Route path="/sessoes/:idFilme" element={<ScheduleSession />} />
                    <Route 
                        path="/assentos/:idSessao" 
                        element={shouldRedirect ? (<Navigate replace to='/success' />) : (<ScheduleSeat setShouldRedirect={setShouldRedirect}/>)} 
                    />
                    <Route path="/success" element={<RequestMade />} />
            
            
                </Routes>
            </BrowserRouter>
        </>
    )
}