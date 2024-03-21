import BookHeading from "../../components/bookHeading";
import NextBTN from "../../components/nextBtn";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../../components/modal";
import { getDatabase, ref, push } from "firebase/database";

const Home = () => {
  const lastPart = window.location.href.split("/").pop();
  const [passenger, setPassenger] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [place, setPlace] = useState("");
  const [fare, setFare] = useState("");
  const history = useHistory();

  function cta() {
    const db = getDatabase();
    const bookingsRef = ref(db, 'bookings');

    let total = parseInt(passenger) * parseInt(fare);
    const newData = { passenger, place, fare, time, date, total };

    push(bookingsRef, newData)
      .then((newBookingRef) => {
        const newId = newBookingRef.key;
        history.push(`${lastPart}/payment/${newId}`);
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  }

  return (
    <div className="home">
      <BookHeading />

      <div className="home-container">
        <div className="location">
          <label className="label">Location Details</label>

          <div className="locationInput">
            <label>From</label>
            <input type="text" value={"CTU Daanbantayan"} readOnly />
          </div>

          <div className="locationInput">
            <label>To</label>
            <input
              type="text"
              placeholder="Click Here to Choose Location"
              value={place}
              readOnly
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        <div className="date">
          <label>Date Details</label>
          <input type="hidden" value={fare} onChange={(e) => setFare(e.target.value)} />
          <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        </div>

        <div className="passengerCount">
          <div>
            Time <input type="time" onChange={(e) => setTime(e.target.value)}></input>
          </div>
          <div>
            <label>Passenger</label>
            <select onChange={(e) => setPassenger(parseInt(e.target.value))}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>

        <div className="ListOfTricycle"></div>
        <div classNameName="btnContainer">
          <button classNameName="proceedbtn" onClick={cta}>
            Proceed
          </button>
        </div>
      </div>

      {openModal && <Modal closeModal={setOpenModal} place={setPlace} fare={setFare} />}
    </div>
  );
};

export default Home;
