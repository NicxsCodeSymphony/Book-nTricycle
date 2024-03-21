import { ref, get, remove, push } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import database from "../../backend/firebase";
import BookHeading from "../../components/bookHeading";
import "../../style/receipt.css";

function Receipt() {
  const lastPart = window.location.href.split("/").pop();
  const [, , , fourthFromRight] = window.location.href.split("/").reverse();
  const [data, setData] = useState([]);
  const passengerRef = useRef(null);
  const idRef = useRef(null);
  const paymentRef = useRef(null);
  const placeRef = useRef(null);
  const totalRef = useRef(null);
  const initialPaymentRef = useRef(null);
  const changeRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, "bookings"));
        const data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleInsert = async (newData) => {
    try {
      // Assuming 'driverBookings' is the path in your database
      const newBookingRef = ref(database, "driverBookings");
      await push(newBookingRef, newData);
      console.log("Data inserted successfully");
    } catch (error) {
      console.error("Error inserting data: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await remove(ref(database, `bookings/${id}`));
      console.log("Document successfully deleted");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const getData = (e) => {
    e.preventDefault();
    if (
      idRef.current &&
      passengerRef.current &&
      paymentRef.current &&
      placeRef.current &&
      totalRef.current &&
      initialPaymentRef.current &&
      changeRef.current &&
      timeRef.current &&
      dateRef.current
    ) {
      const payment = paymentRef.current.textContent;
      const passenger = passengerRef.current.textContent;
      const bookingID = idRef.current.textContent;
      const place = placeRef.current.textContent;
      const total = totalRef.current.textContent;
      const fare = initialPaymentRef.current.textContent;
      const change = changeRef.current.textContent;
      const time = timeRef.current.textContent;
      const date = dateRef.current.textContent;

      const newData = {
        bookingID,
        payment,
        passenger,
        place,
        total,
        fare,
        change,
        time,
        date,
      };
      handleInsert(newData);
      handleDelete(lastPart);
      window.location.href = `/book/${fourthFromRight}`;
    }
  };

  return (
    <div>
      <BookHeading />
      {data.map((dataItem) => (
        <div className="main-body" key={dataItem.id}>
          <div className="headings">
            <h3 className="company-name">Book'n Tricycle</h3>
            <span className="address">CTU - Daanbantayan</span>
            <p className="receipt-number">
              Receipt #: <span ref={idRef}>{dataItem.id}</span>
            </p>
          </div>

          <div className="design">
            <h4> * * * * * * * * * * * * * * * * * * * * * * * * *</h4>
            <h4 className="label">Receipt</h4>
            <h4> * * * * * * * * * * * * * * * * * * * * * * * * *</h4>
          </div>

          <div className="information">
            <p className="description">
              Description <span>Travel Fee</span>
            </p>
            <p>
              Account Name <span>Casei Eslera</span>{" "}
            </p>
            <p>
              From <span>CTU Daanbantayan</span>{" "}
            </p>
            <p>
              To <span ref={placeRef}>{dataItem.place}</span>
            </p>
            <p>
              Total Passengers{" "}
              <span ref={passengerRef}>{dataItem.passenger}</span>
            </p>
            <p>
              Date <span ref={dateRef}>{dataItem.date}</span>
            </p>
            <p>
              Time <span ref={timeRef}>{dataItem.time}</span>
            </p>
          </div>

          <div className="design">
            <h4> * * * * * * * * * * * * * * * * * * * * * * * * *</h4>
          </div>

          <div className="information">
            <p className="description">
              Total <span ref={totalRef}>{`₱ ${dataItem.total}.00`}</span>
            </p>
            <p>
              Initial payment{" "}
              <span ref={initialPaymentRef}>{`₱ ${dataItem.fare}.00`}</span>{" "}
            </p>
            <p>
              Cash <span ref={paymentRef}>₱ {dataItem.payment}.00</span>{" "}
            </p>
            <p>
              Change <span ref={changeRef}>{`₱ ${dataItem.change}.00`}</span>
            </p>
          </div>

          <button className="exit" onClick={getData}>
            Exit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Receipt;
