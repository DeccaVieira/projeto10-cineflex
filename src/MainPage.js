import styled from "styled-components"
import { useEffect , useState } from "react"
import Movies from "./Movies"
import axios from "axios"


export default function MainPage() {



const [images, setImages] = useState([])
useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const promise = axios.get(URL)

    promise.then((res) => {
console.log(res.data)
setImages(res.data)
    })

    promise.catch((err) =>
    console(err.response.data))

}, [])

if(images.length === 0){
    return <div>Loading...</div>
}
    return (<>
<StyleOption><h2>Selecione o filme</h2></StyleOption>
<StyleMainScreen>
  
{images.map((img) => <Movies key={img.id} img={img}/>)}

</StyleMainScreen>
</>
    )

}
const StyleMainScreen = styled.main `
height:700px;
width: 375px;
background-color: #FFFFFF;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
overflow-y:scroll;
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