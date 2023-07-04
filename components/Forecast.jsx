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

function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}

function Forecast(props) {
  const d = new Date();
  const newDate = addDays(d, props.index);

  let day = weekday[newDate.getDay()];
  const dayNumber = newDate.getDate();
  let month = months[newDate.getMonth()];

  return (
    <div className='w-[115px] h-[177px] bg-[#1E213A]'>
      <div className='text-sm flex justify-around items-center text-center px-2 py-3'>
        {props.index == 1 ? "Tomorrow" : `${day}. ${dayNumber} ${month}`}
      </div>
      <div className='flex justify-around items-center px-2 py-3'>
        <Image
          className=''
          src='/Shower.png'
          alt='img-location'
          width={50}
          height={75}
        />
      </div>
      <div className='text-sm flex justify-around items-center px-2 py-3'>
        <div>
          {props.min} {props.units == "metric" ? "°F" : "°C"}
        </div>
        <div>
          {props.max} {props.units == "metric" ? "°F" : "°C"}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
