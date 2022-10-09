import GlobalStyle from "./assets/GlobalStyle"
import MainPage from "./MainPage"
import Header from "./Header"
import MovieTime from "./MovieTime"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieSeats from "./MovieSeats"

export default function App() {
    return (<BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sessoes/3" element={<MovieTime />} />
            <Route path="/3/seats" element={<MovieSeats/>}/>
        </Routes>
    </BrowserRouter>)
}
