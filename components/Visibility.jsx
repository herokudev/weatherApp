function Visibility(props) {
  return (
    <div className='w-[328px] h-[160px] bg-[#1E213A] mb-5'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Visibility
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-4xl font-[Raleway]'>
          {props.visibility == 8.0 ? props.visibility : props.visibility / 1000}
        </span>
        <span className='text-3xl'>
          {props.units == "metric" ? "miles" : "kms"}
        </span>
      </div>
    </div>
  );
}

export default Visibility;
