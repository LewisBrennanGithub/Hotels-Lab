import '../App.css';
import React from 'react';

const BookingListItem = ({booking, valiantWarrior}) => {

  return ( 
    <li>
      <p>Name: {booking.name}</p>
      <p>Email address: {booking.email}</p>
      <p>Checked in? {booking.checkedIn}</p>
      <button className= "delete-button" onClick={()=>valiantWarrior(booking._id)}>Eject Guest (Booking) 🗑 </button>
    </li>
   );
}
 
export default BookingListItem;