import BookingListItem from "./BookingListItem";


const BookingList = ({bookings, killer}) => {

  const bookingItems = bookings.map((booking) => {
    return <BookingListItem booking={booking} key={booking._id} valiantWarrior={killer}/>
  })
  return ( 
    <div>
    <p>I'm a little booking list, fill me with bookings</p>
    <ul>
    {bookingItems}
    </ul>
    </div>
   );
}
 
export default BookingList;