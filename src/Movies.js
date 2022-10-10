import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Movies({ img }) {


   return (
      <>
         <StyleMovies>
            <Link to={`/sessoes/${img.id}`}>
               <img data-identifier="movie-outdoor" src={img.posterURL} alt={img.title} />
            </Link>
         </StyleMovies>

      </>)
}
const StyleMovies = styled.section`
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