const fetchData = (searchCity) => {
  console.log("Entering fetchData");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const request_headers = new Headers();

  const request_options = {
    method: "GET",
    headers: request_headers,
  };
  
  try {
    fetch(url, request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("fetch OK --> " + JSON.stringify(result.coord))
          return result.coord;
        },
        (error) => {
          console.log("fetch ERROR --> " + JSON.stringify(error))          
        }
      );
  } catch (error) {
    console.error(error);
  }
};
export default fetchData;

export function sumarNumeros(a,b) {
  return parseInt(a) + parseInt(b);
} 
