import styled from "styled-components"
import { useEffect , useState } from "react"
import colors from "./assets/colors"
import Header from "./Header"
import Movies from "./Movies"
import axios from "axios"

export default function MainPage() {
const [images, setImages] = useState([])
useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const promise = axios.get(URL)

    promise.then((res) => {
console.log(res.data)
setImages(res.data)
    })

    promise.catch((err) =>
    console(err.response.data))

}, [])
    return (

<StyleMainScreen>
<Header/>
{images.map((img) => <Movies key={img.id} img={img}/>)}
</StyleMainScreen>
    )

}
const StyleMainScreen = styled.main `
height:877px;
width: 375px;
background-color: #FFFFFF;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
overflow-y:scroll;
`