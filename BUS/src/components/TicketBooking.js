import React from 'react';
import './b.css'; // Import the CSS file

class TicketBooking extends React.Component {
  bookingConfirm = () => {
    // Handle booking confirmation logic if needed
    alert('Booking confirmed!');
  };

  render() {
    return (
      <div>
          <div className="container" style={{ paddingTop: '60px' }}>
            <div className="row">
              <div className="col-lg-6" style={{ backgroundColor: 'lightseagreen', borderRadius: '30px' }}>
                <br />
                <h5 style={{ textAlign: 'center' }}>
                  <b>
                    TICKET BOOKING
                  </b>
                </h5>
                <br />
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    PASSENGER DETAILS
                  </b>
                </h2>
                

                <form>
                  <table className="reg">
                    {/* Your existing form inputs */}
                    <tr>
                      <td><br></br> <b>NAME</b></td>
                      <td>
                        <br></br>
                        <input type="text" placeholder="Enter passenger name" id="n1" className="form-control" />
                      </td>
                    </tr>

                    <tr>
                      <td><b>MOBILE NUMBER</b></td>
                      <td>
                        <input type="text" placeholder="Enter Mobile Number" id="m1" className="form-control" />
                      </td>
                    </tr>

                    <tr>
                      <td><b>GENDER</b></td>
                      <div className="gender">
                      <td>
                        <input type="radio" id="p1" name="r1" /> Male
                      </td>

                      <td>
                        <input type="radio" id="p1" name="r1" /> Female
                      </td>
                      </div>
                    </tr>

                    <tr>
                      <td><b>TRAVEL DATE</b></td>
                      <td>
                        <input type="date" id="d1" className="form-control" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <b>Warning: Allot seat first</b>
                      </td>
                    </tr>

                    <tr>
                      <td><button>
                        <input
                          type="button"
                          value="Booking confirm"
                          className="form-control"
                          onClick={this.bookingConfirm}
                          style={{ width: '200px', height: '30px', color: 'blue' }}
                        />
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>

              <div className="container" style={{ paddingTop: '40px' }}>
                <div className="col-lg-6"></div>
                <h2>
                  <u>Allotment of seat:</u>
                </h2>
                <br />
                <button className="button" onClick={() => alert('seat 1 allotted for you')}>
                  Seat 01
                </button>
                <button className="button" onClick={() => alert('seat 2 allotted for you')}>
                  Seat 02
                </button>
                <button className="button" onClick={() => alert('seat 3 allotted for you')}>
                  Seat 03
                </button>
                <button className="button" onClick={() => alert('seat 4 allotted for you')}>
                  Seat 04
                </button>
                <button className="button" onClick={() => alert('seat 5 allotted for you')}>
                  Seat 05
                </button>
                <button className="button" onClick={() => alert('seat 6 allotted for you')}>
                  Seat 06
                </button>
                <button className="button" onClick={() => alert('seat 7 allotted for you')}>
                  Seat 07
                </button>
                <button className="button" onClick={() => alert('seat 8 allotted for you')}>
                  Seat 08
                </button>
                <button className="button" onClick={() => alert('seat 9 allotted for you')}>
                  Seat 09
                </button>
                <button className="button" onClick={() => alert('seat 10 allotted for you')}>
                  Seat 10
                </button>
                <button className="button" onClick={() => alert('seat 11 allotted for you')}>
                  Seat 11
                </button>
                <button className="button" onClick={() => alert('seat 12 allotted for you')}>
                  Seat 12
                </button>
                <button className="button" onClick={() => alert('seat 13 allotted for you')}>
                  Seat 13
                </button>
                <button className="button" onClick={() => alert('seat 14 allotted for you')}>
                  Seat 14
                </button>
                <button className="button" onClick={() => alert('seat 15 allotted for you')}>
                  Seat 15
                </button>
                <button className="button" onClick={() => alert('seat 16 allotted for you')}>
                  Seat 16
                </button>
                <button className="button" onClick={() => alert('seat 17 allotted for you')}>
                  Seat 17
                </button>
                <button className="button" onClick={() => alert('seat 18 allotted for you')}>
                  Seat 18
                </button>
                <button className="button" onClick={() => alert('seat 19 allotted for you')}>
                  Seat 19
                </button>
                <button className="button" onClick={() => alert('seat 20 allotted for you')}>
                  Seat 20
                </button>
                
                <br />
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default TicketBooking;