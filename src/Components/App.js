
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import GlobalStyle from "../assets/css/GloballStyle"
import FontStyles from "../assets/css/FontStyles"

import { MovieSelection } from './MovieSelection'
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
            
            
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    )
}