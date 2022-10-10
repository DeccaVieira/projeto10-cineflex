import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Schedule from "./Schedule"
import FooterMovie from "./FooterMovie"
import { useParams } from "react-router-dom"

export default function MovieTime() {
    const [idMovie, setIdMovie] = useState({})
    const [schedules, setSchedules] = useState([])
    const [movie, setMovie] = useState({})
    const { movieId } = useParams()
console.log(movieId)

    useEffect(() => {

        const URL = (`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        const promise = axios.get(URL);
        promise.then((res) => {

            setSchedules(res.data.days)
            setMovie(res.data)
            setIdMovie(res.data.id)

        })

        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])

    return (<>

        <StyleOption><h2>Selecione o horário</h2></StyleOption>
        <StyleMovieTime>
            {schedules.map((schedules) => <Schedule key={schedules.id} schedules={schedules} setSchedules={setSchedules} idMovie={idMovie} setIdMovie={setIdMovie} />)}
        </StyleMovieTime>
        <FooterMovie movie={movie} setMovie={setMovie} />
    </>)
}
const StyleOption = styled.section`
width:374px;
height:110px;
display:flex;
justify-content:center;
align-items:center;
color:#E8833A;
h2 {
    font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #293845;

}
`

const StyleMovieTime = styled.main`
height:700px;
width: 375px;
background-color: #ffffff;
display:flex;
flex-direction:column;
justfy-content: space-between;
overflow-y:scroll;
padding: 23px;
`

