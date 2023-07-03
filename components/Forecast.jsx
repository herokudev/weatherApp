import Image from "next/image";

function Forecast() {
  return (
    <div className='w-[115px] h-[177px] bg-[#1E213A]'>
      <div className='text-sm flex justify-around items-center text-center px-2 py-3'>
        Tomorrow
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
        <div>16°C</div>
        <div>11°C</div>
      </div>
    </div>
  );
}

export default Forecast;
