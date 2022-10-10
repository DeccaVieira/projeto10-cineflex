import GlobalStyle from "./assets/GlobalStyle"
import { useState } from "react"
import MainPage from "./MainPage"
import Header from "./Header"
import MovieTime from "./MovieTime"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieSeats from "./MovieSeats"
import End from "./End"

export default function App() {
    const [images, setImages] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [movies, setMovies] = useState([])
    const [schedules, setSchedules] = useState([])
    const [seatsArray, setSeatsArray] = useState([])

    return (<BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<MainPage images={images} setImages={setImages} />} />
            <Route path="/sessoes/:movieId" element={<MovieTime seatsArray={seatsArray} setSeatsArray={setSeatsArray} schedules={schedules} setSchedules={setSchedules} />} />
            <Route path="/assentos/:idSessao" element={<MovieSeats name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>}/>
            <Route path="/sucesso" element = {<End name={name} schedules={schedules} cpf={cpf} images={images}/>} />
        </Routes>
    </BrowserRouter>)
}
