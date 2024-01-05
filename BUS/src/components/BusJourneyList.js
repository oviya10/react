import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './c.css';
import Navbar from './Navbar';
class BusJourneyList extends React.Component {
  handleNavigation = (destination) => {
    window.location.href = destination;
  };

  render() {
    return (
        
      <div>
        
        <h1 style={{ textAlign: 'center', color: 'brown' }}>
          <b>
            <u>Search Buses for different routes</u>
          </b>
        </h1>
        <br />
        <br />

        <div className="container">
          <table border="3" className="table table-hover">
            <thead>
              <tr>
                <th>Bus Name</th>
                <th>Bus Id</th>
                <th>From</th>
                <th>To</th>
                <th>Arriving Time</th>
                <th>Price</th>
                <th>Book now</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Speedx</td>
                <td>Spe345</td>
                <td>Bokaro</td>
                <td>Patna</td>
                <td>10:00AM</td>
                <td>Rs.200/-</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: '150px' }}
                    onClick={() => this.handleNavigation('./book')}
                  >
                    Book Ticket
                  </button>
                </td>
              </tr>
              
                
                
  <tr>
    <td>Rainbow</td>
    <td>Rain345</td>
    <td>Kolkata</td>
    <td>Jamsedpur</td>
    <td>7:00AM</td>
    <td>Rs.300/-</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '150px' }}
        onClick={() => this.handleNavigation('./book')}
      >
        Book Ticket
      </button>
    </td>
  </tr>
  <tr>
    <td>Centrix</td>
    <td>Cnx345</td>
    <td>Ranchi</td>
    <td>Gaya</td>
    <td>4:30AM</td>
    <td>Rs.390/-</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '150px' }}
        onClick={() => this.handleNavigation('./book')}
      >
       Book Ticket
      </button>
    </td>
  </tr>
  <tr>
    <td>Galaxy</td>
    <td>gly345</td>
    <td>Deoghar</td>
    <td>Bokaro</td>
    <td>7:00PM</td>
    <td>Rs.260/-</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '150px' }}
        onClick={() => this.handleNavigation('./book')}
      >
        Book Ticket
      </button>
    </td>
  </tr>
  <tr>
    <td>Expresso</td>
    <td>Exp789</td>
    <td>Delhi</td>
    <td>Mumbai</td>
    <td>8:30AM</td>
    <td>Rs.500/-</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '150px' }}
        onClick={() => this.handleNavigation('./book')}
      >
      Book Ticket
      </button>
    </td>
  </tr>
  <tr>
    <td>Greenline</td>
    <td>Grn567</td>
    <td>Chennai</td>
    <td>Bangalore</td>
    <td>6:15PM</td>
    <td>Rs.350/-</td>
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '150px' }}
        onClick={() => this.handleNavigation('./book')}
      >
       Book Ticket
      </button>
    </td>
  </tr>

              
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default BusJourneyList;
