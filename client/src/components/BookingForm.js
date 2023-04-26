import React, { useState } from 'react';
import { postBooking } from '../BookingServices';

const BookingForm = ({bookingsSubmit}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkedIn: false,
  })

  const onChange = (e) => {
    const newFormData = {...formData};
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    postBooking(formData).then((data)=>{
      bookingsSubmit(data)
    })
    setFormData(formData)
  }


  return ( 
    <div>
    <form onSubmit={handleSubmit} id="bookings-form">
      <h2>Add a Booking</h2>
      
      <label htmlFor="name">Name</label>
      <input 
      onChange={onChange} 
      type="text" 
      id="name"
      name="name"
      value={formData.name}
      />

      <label htmlFor="email">Email</label>
      <input 
      onChange={onChange}
      type="text" 
      id="name"
      name="email"
      value={formData.email}
      />

      <label htmlFor="checkedIn">Checked In</label>
      <select onChange={onChange}  name="" id="">
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      <input type="submit" />
    </form>
    </div>
   );
}
 
export default BookingForm;