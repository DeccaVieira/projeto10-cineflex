import styled from "styled-components"

export default function FooterMovie(props) {
    const {schedules , setSchedules} = props
    console.log(props.schedules.title) 
    return(<>
    <StyleFooterMovie>
<h2>{props.schedules.title}</h2>
    </StyleFooterMovie>
    </>)
}
const StyleFooterMovie = styled.section` 
width:375px;
heigth:117px;
background-color: #DFE6ED
margin-bottom:0;
h2 {
    font-family: Roboto;
font-size: 26px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

}
`