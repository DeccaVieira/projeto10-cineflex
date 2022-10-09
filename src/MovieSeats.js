import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Seats from "./Seats"
import { useParams } from "react-router-dom"

export default function MovieSeats() {
const [seat, setSeat] = useState({})
const {sessionID} = useParams()
useEffect(() =>{ 
const URL = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/99/seats"
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
<ContainerStatus>
<StyleContainerStatus><StyleStatusS/> Selecionado</StyleContainerStatus>
<StyleContainerStatus><StyleStatusAvailable/>Disponível</StyleContainerStatus>
<StyleContainerStatus><StyleStatusU/>Indisponível</StyleContainerStatus>
</ContainerStatus>
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
const StyleStatusAvailable = styled.li`
width:24px;
height:24px;
background-color:#C3CFD9;
border-radius:50%;
`
const StyleStatusS = styled(StyleStatusAvailable)`
background-color: #8DD7CF;
`
const StyleStatusU = styled(StyleStatusAvailable)`
background-color:#FBE192;
`
const StyleContainerStatus = styled.ul`
height:53px;
width: 91px;
display:flex:
justify-content: center;
align-items:center;
flex-direction:column;
`
const ContainerStatus = styled.div`
width:344px;
display:flex;
flex-direction: row;
justify-content: space-between;
padding:24px;
li {
    display:flex;
    justify-content:center;
}
`