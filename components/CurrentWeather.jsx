import Image from "next/image";

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
        <span>15 °c</span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>Shower</span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>Today * Fri. 5 Jun</span>
      </div>
      <div className='flex justify-center items-center pt-5 pb-5'>
        <span>{props.city}</span>
      </div>
    </main>
  );
}

export default CurrentWeather;
