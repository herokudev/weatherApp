function Humidity(props) {
  return (
    <div className='w-[328px] h-[204px] bg-[#1E213A] mb-5'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Humidity
      </div>
      <div className='text-5xl flex justify-center items-center font-[Raleway]'>
        {props.humidity}%
      </div>
      <div>
        <div>
          <div className='flex justify-evenly items-baseline text-[#A09FB1] text-xs'>
            <div>0</div>
            <div>50</div>
            <div>100</div>
          </div>
        </div>
        <div className='bg-white mx-[75px] w-[180px] h-[12px] rounded-lg flex justify-start items-center'>
          <divs
            className='bg-yellow-300 h-[8px] rounded-lg'
            style={{ width: `${props.humidity}%` }}
          ></divs>
        </div>
        <div className=' mx-[250px]'>%</div>
      </div>
    </div>
  );
}

export default Humidity;
