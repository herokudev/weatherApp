function Visibility(props) {
  const unitVisibility = parseInt(props.visibility / 1000);
  const digit = props.visibility - unitVisibility * 1000;
  const strDig = digit.toString().substring(0, 1);

  return (
    <div className='w-[250px] h-[160px] bg-[#1E213A] px-8 py-3'>
      <div className='text-sm flex justify-center items-center pt-8'>
        Visibility
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-5xl'>
          {unitVisibility},{strDig}
        </span>
        <span className='text-4xl'>
          {props.units == "metric" ? "mph" : "kms"}
        </span>
      </div>
    </div>
  );
}

export default Visibility;
