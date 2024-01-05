import React from "react";
import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import BusJourneyList from "./components/BusJourneyList";
import Signup from "./components/Singup/Signupp";
import Login from "./components/Login/Login";
import TicketBooking from "./components/TicketBooking";
//import Bookingpage from "./components/Bookingpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//import BookingForm from "./components/Bookingpage";
import ContactFomAndAddress from "./components/Contactus";
// import Login from "./components/Login/Login";
// import Signup from "./components/Singup/Signupp";
function App() {
  return (
    <div className="App">
      {/* <Bookingpage/> */}
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/search' element={<BusJourneyList/>}/>
        <Route path='/book' element={<TicketBooking/>}/>
        <Route path='/contact' element={<ContactFomAndAddress/>}/>
        
        </Routes> 
      </BrowserRouter>
    </div>
    

  );
 }

export default App;
