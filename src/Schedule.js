import styled from "styled-components"

export default function Schedule(props) {
  const {schedules , setSchedules, day, setDay} = props
   console.log(props.schedules.id) 
   console.log(props.schedules.showtimes[1].id)  
    return (<>
        <StyleDateTime>
            <h3>{props.schedules.weekday}-{props.schedules.date}</h3>
             
        </StyleDateTime>
        <StyleButtonTime><h2>{props.schedules.showtimes[0].name}</h2></StyleButtonTime>
        <StyleButtonTime><h2>{props.schedules.showtimes[1].name}</h2></StyleButtonTime>
                        
    </>
    )

}


const StyleDateTime = styled.div`
width: 291px;
height: 35px;
margin-left:24px;
background-color: yellow;
h3{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
color: #293845  
}
`
const StyleButtonTime = styled.button`
width:82px;
height: 43px;
margin-left:24px;
margin-top:22px;
background-color: #E8833A;
border:none;
border-radius:3px;
h2{
    color: black;
    font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.02em;
text-align: center;
}
`
