import styled from "styled-components"
import GlobalStyle from "./assets/GlobalStyle"
import MainPage from "./MainPage"
import Movies from "./Movies"
import MovieTime from "./MovieTime"


export default function App() {
    return (<>
    <StyleContainer>

    <GlobalStyle/>
    <MainPage></MainPage>
    <MovieTime/>
    </StyleContainer>
  
    </>)
}
const StyleContainer = styled.main `
background-color: #ffffff;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    

`