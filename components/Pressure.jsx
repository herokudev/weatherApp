function Pressure(props) {
  return (
    <div className='w-[328px] h-[160px] bg-[#1E213A] mb-5'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Air Pressure
      </div>
      <div className='text-4xl flex justify-center items-center font-[Raleway]'>
        {props.pressure} mb
      </div>
    </div>
  );
}

export default Pressure;
