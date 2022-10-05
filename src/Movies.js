import react from "react"
import styled from "styled-components"





 export default function Movies({img}) {
    return (
<>
   <StyleMovies>
<img src={img.posterURL} alt="teste"/>
   </StyleMovies>

</>)
 }

         const StyleMovies = styled.section `
         width: 145px;
         height: 209px;
         background-color: #ffffff;
         border-radius: 3px;
         box-shadow: 0px 2px 4px 2px #0000001A;
         margim-bottom: 11px;
         display:flex;
         justify-content:center;
         align-items:center;
         margin-bottom: 11px;
         img{
         width: 129px;
         height:193px;
         
         }
         ` 