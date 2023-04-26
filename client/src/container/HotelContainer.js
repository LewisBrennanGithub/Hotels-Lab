import React, { useState, useEffect } from 'react';
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import { getBookings } from "../BookingServices";
import { deleteBooking } from '../BookingServices';

const HotelContainer = () => {

  const [bookingsState, setBookings] = useState([]);
  
  useEffect(() => {
    getBookings().then((dataBookings) => {
      setBookings(dataBookings);
    })
  }, [bookingsState])


  const onSubmit = (booking) => {
    setBookings([...bookingsState, booking]);
  }

  const removeBooking = (id) => {
    deleteBooking(id).then(() => {
    const bookingsToKeep = bookingsState.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep);
  })
  }

  return ( 
    <div>
      <h1>Hotel Container</h1>
      <BookingForm bookings={bookingsState} bookingsSubmit={onSubmit}/>
      <BookingList bookings={bookingsState} killer={removeBooking}/>
    </div>
   );
}
 
export default HotelContainer;