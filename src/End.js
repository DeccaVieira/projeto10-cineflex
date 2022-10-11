import { Link } from "react-router-dom"
import styled from "styled-components"

export default function End(props) {
    const { name, cpf, schedules,images } = props
   
    return (<>
        <StyleOption><h2>Pedido feito
            com sucesso!</h2></StyleOption>
        <StyleSummary>
            <h2>Filme e sessão</h2>
            <h3>{images.title}</h3>
            <h3>Sessão</h3>
        </StyleSummary>
        <StyleSummary>
            <h2>Ingressos</h2>
            <h3>Assentos</h3>
            </StyleSummary>
        <StyleSummary><h2>Comprador</h2>
            <h3>{name}</h3>
            <h3>{cpf}</h3>
        </StyleSummary>
        <StyleButton>
            <Link to ="/">
            <button><h2>Voltar pra Home</h2></button>
            </Link></StyleButton>
    </>)
}
const StyleOption = styled.section`
width:190px;
height:110px;
display:flex;
justify-content:center;
align-items:center;
color:#E8833A;
margin-left:84px;
margin-top: 67px;
flex-wrap:wrap;
h2 {
    font-family: Roboto;
font-size: 24px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #247A6B;

}
`
const StyleSummary = styled.div`
width:374px;
height:110px;
margin-left:28px;
h2 {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    
}
h3 {
    font-family: Roboto;
font-size: 22px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0.04em;
text-align: left;

}
`
const StyleButton = styled.div`
button{
width:225px;
height:42px;
background-color:#E8833A;
margin-left:28px;
border:none;
border-radius: 3px;
}
h2{
    color:#ffffff;
    font-size:18px;
}
`
