import Image from "next/image";
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const d = new Date();
let day = weekday[d.getDay()];
const dayNumber = d.getDate();
let month = months[d.getMonth()];

function Location() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='25'
      viewBox='0 -960 960 960'
      width='25'
      fill='white'
    >
      <path d='M480.236-493.846q25.482 0 43.392-18.146 17.91-18.147 17.91-43.629t-18.146-43.392q-18.146-17.91-43.628-17.91t-43.392 18.146q-17.91 18.146-17.91 43.628t18.146 43.393q18.146 17.91 43.628 17.91ZM480-119.231Q339-243.923 267.577-351.808q-71.423-107.884-71.423-196.346 0-126.923 82.654-209.385Q361.461-840 480-840t201.192 82.461q82.654 82.462 82.654 209.385 0 88.462-71.423 196.346Q621-243.923 480-119.231Z' />
    </svg>
  );
}

function CurrentWeather(props) {
  return (
    <main className='bg-[#1E213A] max-w-[1400px] h-full text-white'>
      <div className='bg-[url("/Clouds-bg.png")] flex justify-center items-center'>
        <Image
          className='w-[40%] h-[40%] object-cover'
          src='/HeavyRain.png'
          alt='img-location'
          width={100}
          height={100}
        />
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>
          {props.temp} {props.units == "metric" ? "°C" : "°F"}
        </span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>{props.weatherMain}</span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>{`Today * ${day}. ${dayNumber} ${month}`}</span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <Location />
        <div className=' px-1'>
          <span>{props.city}</span>
        </div>
      </div>
    </main>
  );
}

export default CurrentWeather;
