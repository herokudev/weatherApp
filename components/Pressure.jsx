function Pressure(props) {
  return (
    <div className='w-[250px] h-[160px] bg-[#1E213A] px-8 py-3'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Air Pressure
      </div>
      <div className='text-4xl flex justify-center items-center'>
        {props.pressure} mb
      </div>
    </div>
  );
}

export default Pressure;
