import styled from "styled-components";


export function Seat({
    seatObj,
    setSelectedSeats,
}) {
    function handleClick(isAvailable, event) {
        if (!isAvailable) return alert('Assento já reservado :(');
        if (event.target.className.includes('selected')) {
            event.target.classList.remove('selected');
            setSelectedSeats(current => current.filter(value => value !== seatObj.id));
        } else {
            event.target.classList.add('selected');
            setSelectedSeats(current => [...current, seatObj.id]);
        }
    }

    return(
        <>
           <SeatButton onClick={e => {handleClick(seatObj.isAvailable, e)}} isAvaliable={seatObj.isAvailable}>
                {seatObj.name}
           </SeatButton>
        </>
    );
}

const SeatButton = styled.div`
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    font-size: 12px;
    background-color: ${props => props.isAvaliable ? '#c3cfd9' : '#FBE192' };
    border: 1px solid ${props => props.isAvaliable ? '#7B8B99' : '#F7C52B' };

    &.selected {
        background-color: #8DD7CF;
        border: 1px solid #1aae9e;
    }
`


