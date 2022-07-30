
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import GlobalStyle from "../assets/css/GloballStyle"
import FontStyles from "../assets/css/FontStyles"

import { MovieSelection } from './MovieSelection'
import { ScheduleSession } from './ScheduleSession'
import { ScheduleSeat } from './ScheduleSeat'
import { RequestMade } from './RequestMade'
import { Header } from './Header'
import { Footer } from './Footer'


export default function App() {

    return (
        <>
            <GlobalStyle />
            <FontStyles />
            
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MovieSelection />} />
                    <Route path="/1" element={<ScheduleSession />} />
                    <Route path="/2" element={<ScheduleSeat />} />
                    <Route path="/3" element={<RequestMade />} />
            
            
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    )
}