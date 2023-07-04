function getDirectionAbbreviation(degrees) {
  // Make sure degrees is between 0 and 360
  degrees = (degrees + 360) % 360;

  // Define the directions and their corresponding degree ranges
  const directions = [
    { abbreviation: "N", min: 0, max: 22.5 },
    { abbreviation: "NNE", min: 22.5, max: 45 },
    { abbreviation: "NE", min: 45, max: 67.5 },
    { abbreviation: "ENE", min: 67.5, max: 90 },
    { abbreviation: "E", min: 90, max: 112.5 },
    { abbreviation: "ESE", min: 112.5, max: 135 },
    { abbreviation: "SE", min: 135, max: 157.5 },
    { abbreviation: "SSE", min: 157.5, max: 180 },
    { abbreviation: "S", min: 180, max: 202.5 },
    { abbreviation: "SSW", min: 202.5, max: 225 },
    { abbreviation: "SW", min: 225, max: 247.5 },
    { abbreviation: "WSW", min: 247.5, max: 270 },
    { abbreviation: "W", min: 270, max: 292.5 },
    { abbreviation: "WNW", min: 292.5, max: 315 },
    { abbreviation: "NW", min: 315, max: 337.5 },
    { abbreviation: "NNW", min: 337.5, max: 360 },
  ];

  // Find the matching direction for the degrees
  const direction = directions.find(
    (dir) => degrees >= dir.min && degrees < dir.max
  );

  // Return the abbreviation
  return direction ? direction.abbreviation : "";
}

function Flecha() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='25'
      viewBox='0 -960 960 960'
      width='25'
      fill='white'
    >
      <path d='m190-120-30-30 320-730 320 730-30 30-290-132-290 132Z' />
    </svg>
  );
}

function Wind(props) {
  let winDir = getDirectionAbbreviation(props.windDegrees);

  return (
    <div className='w-[250px] h-[204px] bg-[#1E213A] px-8 py-3'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Wins Status
      </div>
      <div className='text-5xl flex justify-center items-center'>
        {props.windSpeed}
        {props.units == "metric" ? "mph" : "kms"}
      </div>
      <div className='flex justify-around items-center'>
        <div
          className='bg-[#616475] w-[25px] h-[25px] rounded-full'
          style={{ transform: `rotate(${props.windDegrees}deg)` }}
        >
          <Flecha />
        </div>
        <div>{winDir}</div>
      </div>
    </div>
  );
}

export default Wind;
