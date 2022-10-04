import styled from "styled-components"
export default function Header() {
    return (
<Logo><h1>CINEFLEX</h1></Logo>

    )
}

const Logo = styled.header `
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