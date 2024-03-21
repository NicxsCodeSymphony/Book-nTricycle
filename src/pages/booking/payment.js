import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ref, get, update } from 'firebase/database';
import database from '../../backend/firebase';

import '../../style/payment.css';
import BookHeading from '../../components/bookHeading';
import NextBTN from '../../components/nextBtn';

const Payment = () => {
    const history = useHistory();
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [payment, setPayment] = useState('');

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const bookingRef = ref(database, 'bookings/' + id);
                const snapshot = await get(bookingRef);
                if (snapshot.exists()) {
                    setBooking(snapshot.val());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            }
        };

        fetchBooking();
    }, [id]);

    const handleUpdate = async () => {
        if (!booking) return; // Make sure booking data is available

        const paymentAmount = parseInt(payment);
        if (!paymentAmount || paymentAmount < 0) {
            alert('Invalid payment amount');
            return;
        }

        if (paymentAmount >= booking.total) {
            const changeAmount = paymentAmount - booking.total;
            try {
                const bookingRef = ref(database, 'bookings/' + id);
                await update(bookingRef, {
                    payment: paymentAmount,
                    change: changeAmount
                });
                history.push(`receipts/${id}`);
            } catch (error) {
                console.error('Error updating document: ', error);
            }
        } else {
            alert('Insufficient amount');
        }
    };

    return (
        <div className="paymentContainer">
            <BookHeading />
            {booking && (
                <div className="payment">
                    <h3>Payment Details</h3>
                    <div className="paymentMethod"></div>
                    <div className='inputContainer'>
                        <label>Initial Payment</label> <br />
                        <input type='text' value={`₱ ${booking.fare}.00`} readOnly></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Total Payment</label><br />
                        <input type='text' value={`₱ ${booking.total}.00`} readOnly></input>
                    </div>
                    <div className='inputContainer'>
                        <label>Enter Amount</label><br />
                        <input type='text' onChange={(e) => setPayment(e.target.value)}></input>
                    </div>
                    <button className='proceedatabasetn' onClick={handleUpdate}>See Receipt</button>
                </div>
            )}
        </div>
    );
}

export default Payment;
