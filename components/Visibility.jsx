function Visibility(props) {
  return (
    <div className='w-[250px] h-[160px] bg-[#1E213A] px-8 py-3'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Visibility
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-4xl'>
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
