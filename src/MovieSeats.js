import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Seats from "./Seats"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import FooterMovie from "./FooterMovie"
export default function MovieSeats(props) {
    const [seatsArray, setSeatsArray] = useState([])
 const {name, setName, cpf, setCpf} = props
    const { idSessao } = useParams()
console.log(seatsArray)

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)


        promise.then((res) => {
            const teste = [];
      for (let i = 0; i < res.data.seats.length; i++) {
        teste.push({
          ...res.data.seats[i],
          
          isSelected: false
        });
      }

     
      setSeatsArray(teste);
        })

        promise.catch((err) =>
            console.log(err.response.data))
    }, [])
 
  
    return (<>
        <StyleOption><h2>Selecione o(s) assento(s)</h2></StyleOption>
        <StyleContainerSeats >
            {seatsArray.map((seat) => <Seats data-identifier="seat" key={seat.id} seatsArray={seatsArray} seat={seat} setSeatsArray={setSeatsArray} />)}
        </StyleContainerSeats>
        <ContainerStatus>
            <StyleContainerStatus><StyleStatusS data-identifier="seat-selected-subtitle"/> Selecionado</StyleContainerStatus>
            <StyleContainerStatus><StyleStatusAvailable data-identifier="seat-selected-subtitle"/>Disponível</StyleContainerStatus>
            <StyleContainerStatus><StyleStatusU data-identifier="seat-selected-subtitle"/>Indisponível</StyleContainerStatus>

</ContainerStatus>
<StyleData>
<StyleUser><h3>Nome do comprador</h3></StyleUser>
<StyleInput><input placeholder="Digite o seu nome..." onChange={e => setName(e.target.value)} /></StyleInput>
<StyleUser><h3>CPF do comprador</h3></StyleUser>
<StyleInput><input placeholder="Digite o seu CPF..." onChange={e => setCpf(e.target.value)} /></StyleInput>
<StyleButton>
<Link to={`/sucesso`}>
<button><h2>Reservar assento(s)</h2></button>
</Link></StyleButton>
</StyleData>

        
    </>)
}
const StyleOption = styled.section`
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
const StyleUser = styled.div`
width: 327px;
height:25px;
h3{
    font-family: Roboto;
font-size: 18px;
font-weight: 400;
}
`
const StyleInput = styled.div`
input{
width:327px;
height: 51px;
border-color:#D4D4D4;
margin:5px;
}
`
const StyleButton = styled.div`
margin-top: 57px;
margin-left: 52px;
button{
width:225px;
height:42px;
background-color:#E8833A;
border:none;
decoration:none;
}
h2{
    color:#ffffff;
    font-size:18px;
}
`
const StyleData = styled.div
`
display:flex;
flex-direction:column;
margin-left:24px;
`