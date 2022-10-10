import styled from "styled-components"

export default function FooterMovie(props, prop) {
    const { schedules, setSchedules, movie, setMovie } = props



    return (<>
        <StyleFooterMovie>
            <StyleImage>
                <img data-identifier="movie-img-preview" src={props.movie.posterURL} />        </StyleImage>
            <h2>{props.movie.title}</h2>
        </StyleFooterMovie>
    </>)
}
const StyleFooterMovie = styled.section` 
width:375px;
heigth:117px;
background-color: #DFE6ED;
display:flex;
align-items:center;
flex-direction: row;
position:fixed;
bottom:0 ;
left:0;
h2 {
    font-family: Roboto;
font-size: 26px;
font-weight: 400;
line-height: 30px;
text-align: left;
color:#293845;

}
`
const StyleImage = styled.div`
height: 89px;
width: 64px;
left: 10px;
top: 774px;
border-radius: 2px;
display: flex;
justify-content:center;
align-items:center;
background-color:#ffffff;
img {
    height: 72px;
    width: 48px;
    top: 782px;
    border-radius: 0px;      
}
`