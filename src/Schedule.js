import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Schedule(props) {
    const { schedules, setSchedules } = props
    console.log(props.schedules.showtimes[0].id)


    return (<>
        <StyleDateTime data-identifier="session-date">
            <h3 >{props.schedules.weekday} - {props.schedules.date}</h3>

        </StyleDateTime>
        <StyleContainerButton>
            {props.schedules.showtimes.map((showtime) => (
                <Link to={`/assentos/${showtime.id}`}>
                    <StyleButtonTime data-identifier="hour-minute-btn" >
                        <h2>{showtime.name}</h2>
                    </StyleButtonTime>
                </Link>
            ))}
        </StyleContainerButton>
    </>
    )

}


const StyleDateTime = styled.div`
width: 291px;
height: 35px;
margin-top:12px;
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
margin: 22px 8px;

background-color: #E8833A;
border:none;
border-radius:3px;

h2{
    color: #ffffff;
    font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.02em;
text-align: center;
}
`
const StyleContainerButton = styled.div`
width:375px;
height:43px;
margin-bottom: 22px;
`
