import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Booking from "./Bookingpage";
import bus from "../assets/2560px-Bus.svg.png";
import Card from "./Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
const Navbar = () => {
   const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  const [From, setFrom] = useState("");
   const [To, setTo] = useState("");
   // const handlelog = () => {
   //    navigate("/");
   // }

  const copiedData = (val) => {
    setShowBooking(true);
    setFrom(val.FROM);
    setTo(val.TO);
    console.log(val.FROM);
    console.log(val.TO);
  };
  
  return (
<div className="p-5">
   <section className=" bg-blue-300 rounded-2xl p-9 mb-10">
      <div className="container w-full">
         <div className="flex py-0">
            <ul className="flex font-bold">
               <li className="p-4">
                  <Player
                  autoplay={true}
                  loop={true}
                  controls={true}
                  src="https://assets6.lottiefiles.com/packages/lf20_2PMsFKmVCe.json"
                  style={{
                  height: "30px",
                  width: "175px",
                  marginLeft: "-50px",
                  marginTop: "-5px",
                  }}                  
                  ></Player>
               </li>
               <li className="-ml-16 text-3xl font-semibold p-2 pr-7 border-r mr-3 border-gray-600">
                  BlueBus
               </li>
               <Link to="/"><li className="p-4">Login</li></Link>
               <li className="p-4">About</li>
               <Link to='./contact'><li className="p-4">Contact us</li></Link>
            </ul>
            <button className="ml-auto bg-[#f23939] h-10 rounded-2xl mt-2 px-4 text-white font-bold" onClick={()=>{navigate("/")}}>
            LogOut 
            </button>
         </div>
         <div className="flex mt-40 ml-5">
            <div className="w-1/2">
               {
                <Card copiedData= {copiedData} />
               }
            </div>
            <div className="w-1/2 ml-11">
               <img src={bus} alt="" />
            </div>
         </div>
      </div>
      </section>
      <div className={showBooking ? '':'hidden'}>
        <Booking Fromm={From} Too={To} />
      </div>   
</div>
);
};
export default Navbar;