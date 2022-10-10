import styled from "styled-components"

export default function Seats(props) {
   
    const { seat, seatsArray, setSeatsArray , name, cpf} = props;


    function handleSelection() {
        const selection = [];
        for (let i = 0; i < seatsArray.length; i++) {
            if (seatsArray[i] === seat) {
                selection.push({
                    ...seatsArray[i],
                    isSelected: !seatsArray[i].isSelected
                });
            } else {
                selection.push({ ...seatsArray[i] });
            }
        }
        setSeatsArray(selection);
        
    }
    function alertSeat(e){
return alert("Esse assento não está disponível")
    }
    return (<>

        {props.seat.isAvailable === true ?
            <StyleStatusAvailable onClick={handleSelection}>{props.seat.name}</StyleStatusAvailable> :
            <StyleStatusUnavailable onClick={alertSeat}>{props.seat.name}</StyleStatusUnavailable>}

    </>)
}
const StyleStatusAvailable = styled.li`
width:26px;
height:26px;
background-color:#C3CFD9;
border-radius:50%;
margin: 9.5px 4px;
display: flex;
justify-content:center;
align-items:center;
flex:wrap;
h2 {
    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em; 
    color:#000000;    
}

`
const StyleSelected = styled(StyleStatusAvailable)`
background-color: #8DD7CF;
`
const StyleStatusUnavailable = styled(StyleStatusAvailable)`
background-color:#FBE192;
`