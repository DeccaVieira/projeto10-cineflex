import styled from "styled-components"
import Header from "./Header"
export default function MovieTime() {
    return (<>
    <StyleMovieTime>
    <Header/>

    </StyleMovieTime>
    
    </>)
}
const StyleMovieTime = styled.main`
height:877px;
width: 375px;
background-color: #FFFFFF;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
margin-left: 20px;
`