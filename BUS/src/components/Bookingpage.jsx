import { Player } from "@lottiefiles/react-lottie-player";
import { GiSteeringWheel } from "react-icons/gi";
import { TbArmchair } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";

const Booking = (props) => {
  const [clickSeat,setColor]= useState([])
  const { Fromm, Too } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/buses", {
          params: { Fromm, Too },
        });
        
        console.log("Response:", response.data);
        const dat = response.data;
        setColor(dat);

      } catch (error) {

        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Fromm, Too]);


  
  const [selectSeat, setSeat] = useState(false);
  const [busId, setBusId] = useState(null);
  const [seatCounts, setSeatCounts] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);


  const showChange = (busId) => {
    setBusId(busId);
    setSeat(!selectSeat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const payload = {
        busId: busId,
        selectedSeats: selectedSeats,
      };
  
      axios.post("http://localhost:8000/addseat", payload)
        .then((response) => {
          console.log("Seats added successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error adding seats:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  
  


  const colchg = (key, bsid) => {
    const updatedClickSeat = clickSeat.map((value) => {
      if (value.id === bsid) {
        const updatedSeats = value.seat.map((seat) => {
          if (seat.id === key) {
            if (seat.col === "black") {
              setSeatCounts((pre) => ({ ...pre, [busId]: pre[busId] ? pre[busId] + 1 : 1 }));
              setSelectedSeats((prevSeats) => [...prevSeats, key]); // Push key to array
              return { ...seat, col: "blue" };
                            
            }
            if (seat.col === "blue") {
              setSeatCounts((pre) => ({ ...pre, [busId]: pre[busId] ? pre[busId] - 1 : 0 }));
              setSelectedSeats((prevSeats) =>
              prevSeats.filter((seatKey) => seatKey !== key) // Revoke key from array
            );
              return { ...seat, col: "black" };
            }
          }
          return seat;
        });
        //console.log(selectedSeats)
        return { ...value, seat: updatedSeats };
      }
      return value;
    });
    setColor(updatedClickSeat);
  };

  const totalFee = clickSeat.map((val) => {
    if (val.id === busId) {
        if (seatCounts[busId] !== 0)
        { 
          return seatCounts[busId] * val.BusFee + 32.25;
        }
        else {
          return 0.00;
        }
    }
  })

  const values = clickSeat.map((values, index) => {
    return (
      <div className='container mt-4 bg-white rounded-lg shadow p-4'>
        <div className='p-4 w-full'>
          <div className='flex'>
            <div className='w-1/3 container '>
              <p className='text-xl' key={index}>
                {values.BusName}
              </p>
            </div>

            <div className='w-1/3 flex'>
              <label className='block'>
                <p className='text-xl ml-[5.5rem]'>{values.BusFtinme}</p>
                <span class='block text-sm font-medium text-slate-500 ml-[5.5rem]'>
                  {values.BusFrom}
                </span>
              </label>
              <p>
                <Player
                  autoplay={true}
                  loop={true}
                  controls={true}
                  src='https://assets4.lottiefiles.com/packages/lf20_Z1UKyUn7Kv.json'
                  style={{
                    height: "100px",
                    width: "50px",
                    marginLeft: "20px",
                    marginTop: "-35px",
                  }}></Player>
              </p>
              <label className='block'>
                <p className='text-xl ml-[1.5rem]'>
                  {values.BusTtinme}
                  <Player
                    autoplay={true}
                    loop={true}
                    controls={true}
                    src='https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json'
                    style={{
                      height: "150px",
                      width: "150px",
                      marginLeft: "0px",
                      marginTop: "-90px",
                    }}></Player>
                </p>
                <span class='block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]'>
                  {values.BusTo}
                </span>
              </label>
            </div>

            <div className='w-1/3 flex -mt-5'>
              <div className='w-1/2'>
                <ul className='flex'>
                  <li>
                    <Player
                      autoplay={true}
                      loop={true}
                      controls={true}
                      src='https://assets7.lottiefiles.com/private_files/lf30_y4c7izgv.json'
                      style={{
                        height: "100px",
                        width: "100px",
                        marginLeft: "",
                        marginTop: "-10px",
                      }}></Player>
                  </li>

                  <li className='mt-7 text-2xl'>{values.BusFee}</li>
                </ul>
              </div>
              <div className='w-1/2 text-zinc-400 mt-5'>
                <ul>
                  <li className='text-center'>18 window seats</li>
                  <li className='text-center'>Total 36 seats</li>
                </ul>
              </div>
            </div>
          </div>
          <p className=' text-sm text-zinc-400 mb-2'>
            {values.BusType}
          </p>
          <div className='flex'>
            <div className='container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]'>
              4.5/5
            </div>

            <p className='border-r ml-3 h-8 mr-3 border-gray-700'></p>
            <p className=' text-xs text-zinc-400 mt-2'>{values.BusRatings}</p>
          </div>

          <div className='flex mt-3'>
            <div className='w-1/2 '>
              <p>
                <ul className='flex text-xs'>
                  <li>
                    <Player
                      autoplay={true}
                      loop={true}
                      controls={true}
                      src='https://assets3.lottiefiles.com/packages/lf20_yEtvMgerwc.json'
                      style={{
                        height: "15px",
                        width: "15px",
                        marginLeft: "0px",
                        marginTop: "13px",
                      }}></Player>
                  </li>

                  <li className='ml-2 mt-[0.8rem]'>People choice for</li>
                  <li className='ml-1 mt-[0.2rem] text-xl'>.</li>
                  <li className='ml-1 mt-[0.8rem]'>Comfortable Seats</li>
                  <li className='ml-1 mt-[0.2rem] text-xl'>.</li>
                  <li className='ml-1 mt-[0.8rem]'>On Time</li>
                  <li className='ml-1 mt-[0.2rem] text-xl'>.</li>
                  <li className='ml-1 mt-[0.8rem]'>Courteous Staff</li>
                  <li className='ml-1 mt-[0.2rem] text-xl'>.</li>
                  <li className='ml-1 mt-[0.8rem]'>Clean Bus</li>
                </ul>
              </p>
            </div>
            <div className='w-1/2'>
              <button
                className='bg-[#23cf95] w-36 ml-[23rem] -mt-5 h-10 rounded-xl p-2 text-white font-bold'
                onClick={() => {
                  showChange(values.id);
                }}>
                {selectSeat && busId === values.id
                  ? "Hide Seat"
                  : "Select Seat"}
              </button>
            </div>
          </div>
        </div>

        <hr class='w-[35rem] h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-300' />

        <div
          className={
            selectSeat && busId === values.id ? "h-[20.8rem] flex" : "hidden"
          }>
          <div className='w-1/2 p-2 flex'>
            <div className='w-1/2'>
              <div className='ml-16'>
                <ul>
                  <li className='flex mb-4 mt-24'>
                    {<TbArmchair size={25} color='gray' />}Booked
                  </li>
                  <li className='flex mb-4'>
                    {<TbArmchair size={25} />}Available
                  </li>
                  <li className='flex mb-4'>
                    {<TbArmchair size={25} color='pink' />}Ladies
                  </li>
                  <li className='flex '>
                    {<TbArmchair size={25} color='blue' />}Selected
                  </li>
                </ul>
              </div>
            </div>

            <div className='rounded-xl border border-black w-1/2 p-6'>
              <div className='ml-36 -mt-1 mb-1'>
                {<GiSteeringWheel size={25} />}
              </div>
              <hr />
              <div className='flex'>
                <div className='w-1/2 flex h-64 p-6'>
                  <div className='ml-3 flex'>
                    <div className='w-1/2 -mt-3'>
                      {
                        <TbArmchair
                          size={25}
                          key={1}
                          color={clickSeat[values.id-1]?.seat[0]?.col}
                          onClick={() => colchg(1, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={2}
                          color={clickSeat[values.id - 1]?.seat[1]?.col}
                          onClick={() => colchg(2, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={3}
                          color={clickSeat[values.id - 1]?.seat[2]?.col}
                          onClick={() => colchg(3, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={4}
                          color={clickSeat[values.id - 1]?.seat[3]?.col}
                          onClick={() => colchg(4, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={5}
                          color={clickSeat[values.id - 1]?.seat[4]?.col}
                          onClick={() => colchg(5, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={6}
                          color={clickSeat[values.id - 1]?.seat[5]?.col}
                          onClick={() => colchg(6, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={7}
                          color={clickSeat[values.id - 1]?.seat[6]?.col}
                          onClick={() => colchg(7, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={8}
                          color={clickSeat[values.id - 1]?.seat[7]?.col}
                          onClick={() => colchg(8, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={9}
                          color={clickSeat[values.id - 1]?.seat[8]?.col}
                          onClick={() => colchg(9, values.id)}
                        />
                      }
                    </div>
                    <div className='w-1/2 -mt-3'>
                      {
                        <TbArmchair
                          size={25}
                          key={10}
                          color={clickSeat[values.id - 1]?.seat[9]?.col}
                          onClick={() => colchg(10, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={11}
                          color={clickSeat[values.id - 1]?.seat[10]?.col}
                          onClick={() => colchg(11, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={12}
                          color={clickSeat[values.id - 1]?.seat[11]?.col}
                          onClick={() => colchg(12, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={13}
                          color={clickSeat[values.id - 1]?.seat[12]?.col}
                          onClick={() => colchg(13, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={14}
                          color={clickSeat[values.id - 1]?.seat[13]?.col}
                          onClick={() => colchg(14, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={15}
                          color={clickSeat[values.id - 1]?.seat[14]?.col}
                          onClick={() => colchg(15, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={16}
                          color={clickSeat[values.id - 1]?.seat[15]?.col}
                          onClick={() => colchg(16, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={17}
                          color={clickSeat[values.id - 1]?.seat[16]?.col}
                          onClick={() => colchg(17, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={18}
                          color={clickSeat[values.id - 1]?.seat[17]?.col}
                          onClick={() => colchg(18, values.id)}
                        />
                      }
                    </div>
                  </div>
                </div>

                <div className='w-1/2 h-64 flex p-6'>
                  <div className='-ml-3 flex'>
                    <div className='w-1/2 -mt-3'>
                      {
                        <TbArmchair
                          size={25}
                          key={19}
                          color={clickSeat[values.id - 1]?.seat[18]?.col}
                          onClick={() => colchg(19, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={20}
                          color={clickSeat[values.id - 1]?.seat[19]?.col}
                          onClick={() => colchg(20, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={21}
                          color={clickSeat[values.id - 1]?.seat[20]?.col}
                          onClick={() => colchg(21, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={22}
                          color={clickSeat[values.id - 1]?.seat[21]?.col}
                          onClick={() => colchg(22, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={23}
                          color={clickSeat[values.id - 1]?.seat[22]?.col}
                          onClick={() => colchg(23, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={24}
                          color={clickSeat[values.id - 1]?.seat[23]?.col}
                          onClick={() => colchg(24, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={25}
                          color={clickSeat[values.id - 1]?.seat[24]?.col}
                          onClick={() => colchg(25, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={26}
                          color={clickSeat[values.id - 1]?.seat[25]?.col}
                          onClick={() => colchg(26, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={27}
                          color={clickSeat[values.id - 1]?.seat[26]?.col}
                          onClick={() => colchg(27, values.id)}
                        />
                      }
                    </div>
                    <div className='w-1/2 -mt-3'>
                      {
                        <TbArmchair
                          size={25}
                          key={28}
                          color={clickSeat[values.id - 1]?.seat[27]?.col}
                          onClick={() => colchg(28, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={29}
                          color={clickSeat[values.id - 1]?.seat[28]?.col}
                          onClick={() => colchg(29, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={30}
                          color={clickSeat[values.id - 1]?.seat[29]?.col}
                          onClick={() => colchg(30, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={31}
                          color={clickSeat[values.id - 1]?.seat[30]?.col}
                          onClick={() => colchg(31, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={32}
                          color={clickSeat[values.id - 1]?.seat[31]?.col}
                          onClick={() => colchg(32, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={33}
                          color={clickSeat[values.id - 1]?.seat[32]?.col}
                          onClick={() => colchg(33, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={34}
                          color={clickSeat[values.id - 1]?.seat[33]?.col}
                          onClick={() => colchg(34, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={35}
                          color={clickSeat[values.id - 1]?.seat[34]?.col}
                          onClick={() => colchg(35, values.id)}
                        />
                      }
                      {
                        <TbArmchair
                          size={25}
                          key={36}
                          color={clickSeat[values.id - 1]?.seat[35]?.col}
                          onClick={() => colchg(36, values.id)}
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='h-20 p-3'>
              <p className='flex'>
                <span className=' text-lg'>{values.BusName}</span>

                <Player
                  autoplay={true}
                  loop={true}
                  controls={true}
                  src='https://assets1.lottiefiles.com/packages/lf20_kXpz0jNKs6.json'
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "10px",
                    marginTop: "-4px",
                  }}></Player>
                <span className='text-xs text-green-500 mt-[0.40rem] ml-2'>
                  High Safety and Hygiene
                </span>
              </p>
              <p className='text-sm text-zinc-400'>{values.BusType}</p>
            </div>
            <div className='flex'>
              <div className='w-1/2 h-[15.7rem] p-3'>
                <p>Seats Selected : {seatCounts[busId]}</p>
                <p className='mt-5'>Boarding Point Details :</p>
                <p className='text-green-400'>{values.BusFrom}</p>
                <p className='border rounded bg-[#2B60DE]  text-center w-48 text-white'>
                  {values.BusFtinme},19.10.2020
                </p>

                <p className='mt-5'>Dropping Point Details :</p>
                <p className='text-green-400'>{values.BusTo}</p>
                <p className='border rounded bg-[#2B60DE] text-center w-48 text-white'>
                  {values.BusTtinme},19.10.2020
                </p>
              </div>
              <div className='w-1/2 p-4'>
                <p className='text-lg'>PRICE</p>
                <div className=' h-48'>
                  <ul className='flex p-2'>
                    <li className='ml-5'>Total Basefare</li>
                    <li className='ml-auto'>{values.BusFee}</li>
                  </ul>
                  <ul className='flex p-2'>
                    <li className='ml-5'>Taxes & fees</li>
                    <li className='ml-auto'>{"32.25"}</li>
                  </ul>
                  <ul className='flex p-2 mt-6'>
                    <li className='ml-5'>Final Price</li>
                    <li className='ml-auto'>{totalFee}</li>
                  </ul>
                  <button className='bg-[#23cf95] w-24 h-8 rounded-xl p-1 text-white font-bold mt-5 ml-[9rem]' onClick={handleSubmit}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });


  return (
    
  <section className=" bg-slate-200 rounded-2xl p-6 w-full h-[43rem]">  
    <div className='container static rounded-xl p-10 overflow-y-auto max-h-[640px]'>
      <div className='container rounded-lg bg-slate-50 p-4 shadow-md absolute w-[72rem] -ml-5 -mt-12 hover:scale-105 duration-100'>
        <div className='flex'>
          <div className='text-green-600 w-1/3'>
            <span className='text-black'>FROM : </span> {Fromm}
          </div>
          <div className='text-green-600 text-center w-1/3'>
            <span className='text-black'>TO : </span> {Too}
          </div>
          <div className='text-end w-1/3 text-green-600'><span className='text-black'>DEPARTURE DATE : </span>{"19.10.2020"}</div>
        </div>
      </div>

      {values}
      </div>
    </section>
  );
};

export default Booking;
