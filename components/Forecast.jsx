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

  const icon = props.dailyIcon.substring(0, 2);
  let img_icon = "";

  switch (icon) {
    case "01":
      img_icon = "01_Clear.png";
      break;
    case "02":
      img_icon = "02_FewClouds.png";
      break;
    case "03":
      img_icon = "03_scattered.png";
      break;
    case "04":
      img_icon = "04_broken.png";
      break;
    case "09":
      img_icon = "09_Shower.png";
      break;
    case "10":
      img_icon = "10_Rain.png";
      break;
    case "11":
      img_icon = "11_Thunderstorm.png";
      break;
    case "13":
      img_icon = "13_Snow.png";
      break;
    case "50":
      img_icon = "02_FewClouds.png";
      break;
    default:
      img_icon = "09_Shower.png";
  }

  return (
    <div className='w-[145px] h-[177px] bg-[#1E213A] mx-5 mr-5 gap-2'>
      <div className='text-sm flex justify-center items-center text-center px-2 py-3'>
        {props.index == 1 ? "Tomorrow" : `${day}. ${dayNumber} ${month}`}
      </div>
      <div className='flex justify-around items-center px-2 py-3'>
        <Image
          className=''
          src={`/${img_icon}`}
          alt='img-location'
          width={50}
          height={75}
        />
      </div>
      <div className='text-sm flex justify-around items-center px-2 py-3'>
        <div className='text-sm'>
          {props.min} {props.units == "metric" ? "°F" : "°C"}
        </div>
        <div className='text-sm'>
          {props.max} {props.units == "metric" ? "°F" : "°C"}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
