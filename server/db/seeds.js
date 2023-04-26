use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Clive",
    email: "Cjob@goggle.com",
    checkedIn: true
  },
  {
    name: "Trevor",
    email: "Tjob@goggle.com",
    checkedIn: false
  },
  {
    name: "Bernard",
    email: "Bbob@goggle.com",
    checkedIn: true
  }
])