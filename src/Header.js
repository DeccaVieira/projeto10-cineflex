import styled from "styled-components"
export default function Header() {
    return (<>
<StyleLogo><h1>CINEFLEX</h1></StyleLogo>
<StyleOption><h2>Selecione o filme</h2></StyleOption>
</>
    )
}

const StyleLogo = styled.header `
width: 375px;
height:67px;
background-color: #C3CFD9;
display:flex;
align-items: center;
justify-content:center;
h1{
    font-family: Roboto;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: center;
color:#E8833A;

}
`
const StyleOption = styled.section `
width:374px;
height:110px;
display:flex;
justify-content:center;
align-items:center;
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