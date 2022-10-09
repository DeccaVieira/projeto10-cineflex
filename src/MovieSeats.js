import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Seats from "./Seats"
export default function MovieSeats() {
const [seat, setSeat] = useState([])
useEffect(() =>{ 
const URL = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/97/seats"
const promise = axios.get(URL)

promise.then((res)=> {
console.log(res.data.seats)
setSeat(res.data.seats)

})
}, [])
    return (<>
    <StyleOption><h2>Selecione o(s) assento(s)</h2></StyleOption>
<StyleContainerSeats>
{seat.map((seat)=> <Seats key={seat.id} seat={seat} setSeat={setSeat}/>)}
</StyleContainerSeats>
    </>)
}
const StyleOption = styled.section `
width:374px;
height:80px;
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
const StyleContainerSeats = styled.ul`
width:344px;
height:175px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
padding:24px;
`
