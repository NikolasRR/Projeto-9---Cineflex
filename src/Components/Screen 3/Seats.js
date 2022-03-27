import { useState } from "react";

function Seats({ seat, reservedSeats, setReservedSeats }) {
    function reserveSeat(seatID, unavailable) {
        if (unavailable === "unavailable") {
            alert("Esse assento não está disponível");
            return
        }
        let array = [...reservedSeats];
        if (array.includes(seatID)) {
            const index  = array.indexOf(seatID);
            array.splice(index, 1);
            setReservedSeats([...array]);
            console.log(array);
            return
        }
        array.push(seatID);
        setReservedSeats([...array]);
        console.log(array);
    }
    const isAvailable = seat.isAvailable;
    const [selected, setSelected] = useState(false);
    let seatState1 = selected ? "selected" : "available";
    let seatState2 = isAvailable ? seatState1 : "unavailable";

    return (
        <div onClick={() => {
            setSelected(!selected);
            reserveSeat(seat.id, seatState2);
        }} key={seat.id} className={seatState2}>
            {seat.name.toString().padStart(2, '0')}
        </div>
    )
}

export default Seats;