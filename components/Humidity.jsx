function Humidity(props) {
  return (
    <div className='w-[250px] h-[204px] bg-[#1E213A] px-8 py-3'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Humidity
      </div>
      <div className='text-5xl flex justify-center items-center'>
        {props.humidity}%
      </div>
      <div>
        <div>
          <div className='flex justify-evenly items-baseline'>
            <div>0</div>
            <div>50</div>
            <div>100</div>
          </div>
        </div>
        <div className='bg-white w-[180px] h-[12px] flex justify-start items-center'>
          <div
            className='bg-yellow-300 h-[8px]'
            style={{ width: `${props.humidity}%` }}
          ></div>
        </div>
        <div className='flex justify-end items-end'>%</div>
      </div>
    </div>
  );
}

export default Humidity;
