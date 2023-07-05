"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import Wind from "@/components/Wind";
import Humidity from "@/components/Humidity";
import Visibility from "@/components/Visibility";
import Pressure from "@/components/Pressure";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [searchCity, setSearchCity] = useState("Guatemala");
  const [apiCoord, setApiCoord] = useState({});
  const [lat, setLat] = useState("14.6222328");
  const [lon, setLon] = useState("-90.5185188");
  const [units, setUnits] = useState("imperial");
  const [weatherData, setWeatherData] = useState({});
  const [temp, setTemp] = useState(18.06);
  const [weatherMain, setWeatherMain] = useState("Shower");
  const [imgCurrent, setImgCurrent] = useState("09_Shower.png");
  const [dailyMin, setDailyMin] = useState(16.47);
  const [dailyMax, setDailyMax] = useState(22.9);
  const [dailyIcon, setDailyIcon] = useState("09_Shower.png");
  const [dailyMin1, setDailyMin1] = useState(16.11);
  const [dailyMax1, setDailyMax1] = useState(24.34);
  const [dailyIcon1, setDailyIcon1] = useState("09_Shower.png");
  const [dailyMin2, setDailyMin2] = useState(14.83);
  const [dailyMax2, setDailyMax2] = useState(24.44);
  const [dailyIcon2, setDailyIcon2] = useState("09_Shower.png");
  const [dailyMin3, setDailyMin3] = useState(14.86);
  const [dailyMax3, setDailyMax3] = useState(22.27);
  const [dailyIcon3, setDailyIcon3] = useState("09_Shower.png");
  const [dailyMin4, setDailyMin4] = useState(15.98);
  const [dailyMax4, setDailyMax4] = useState(21.17);
  const [dailyIcon4, setDailyIcon4] = useState("09_Shower.png");
  const [windSpeed, setWindSpeed] = useState(4.02);
  const [windDegrees, setWindDegrees] = useState(111);
  const [humidity, setHumidity] = useState(91);
  const [pressure, setPressure] = useState(1021);
  const [visibility, setVisibility] = useState("8.0");

  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      const info = response.data;
      setWeatherData(info);
      setTemp(weatherData["current"]["temp"]);
      setWeatherMain(weatherData["current"]["weather"]["0"]["main"]);
      setImgCurrent(weatherData["current"]["weather"]["0"]["icon"]);
      setDailyMin(weatherData["daily"]["0"]["temp"]["min"]);
      setDailyMax(weatherData["daily"]["0"]["temp"]["max"]);
      setDailyIcon(weatherData["daily"]["0"]["weather"]["0"]["icon"]);
      setDailyMin1(weatherData["daily"]["1"]["temp"]["min"]);
      setDailyMax1(weatherData["daily"]["1"]["temp"]["max"]);
      setDailyIcon1(weatherData["daily"]["1"]["weather"]["0"]["icon"]);
      setDailyMin2(weatherData["daily"]["2"]["temp"]["min"]);
      setDailyMax2(weatherData["daily"]["2"]["temp"]["max"]);
      setDailyIcon2(weatherData["daily"]["2"]["weather"]["0"]["icon"]);
      setDailyMin3(weatherData["daily"]["3"]["temp"]["min"]);
      setDailyMax3(weatherData["daily"]["3"]["temp"]["max"]);
      setDailyIcon3(weatherData["daily"]["3"]["weather"]["0"]["icon"]);
      setDailyMin4(weatherData["daily"]["4"]["temp"]["min"]);
      setDailyMax4(weatherData["daily"]["4"]["temp"]["max"]);
      setDailyIcon4(weatherData["daily"]["4"]["weather"]["0"]["icon"]);
      setWindSpeed(weatherData["current"]["wind_speed"]);
      setWindDegrees(weatherData["current"]["wind_deg"]);
      setHumidity(weatherData["current"]["humidity"]);
      setPressure(weatherData["current"]["pressure"]);
      setVisibility(weatherData["current"]["visibility"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCoordinates = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      const propertyValues = Object.values(response.data.coord);
      setApiCoord(propertyValues);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCoordinates();
    if (apiCoord) {
      setLat(apiCoord[1]);
      setLon(apiCoord[0]);
      getWeatherData();
    }
  }, [searchCity, units]);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleLocalCity = () => {
    setSearchCity("Guatemala");
  };

  const handleChange = (event) => {
    setSearchCity(event.target.value);
  };

  const selectedCity = (city) => {
    setSearchCity(city);
    setOpen(!isOpen);
  };

  const handleUnitsC = () => {
    setUnits("metric");
  };

  const handleUnitsF = () => {
    setUnits("imperial");
  };

  return (
    <main className='bg-[#100E1D] max-w-[1440px] grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8'>
      <section className='bg-[#1E213A] max-w-[625px] max-h-screen '>
        <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-10 pt-10 pb-10 text-white'>
          <CustomButton
            title='Search for Places'
            containerStyles='bg-[#6E707A] text-[#E7E7EB] text-sm mt-5 px-2 py-2'
            handleClick={handleClick}
          ></CustomButton>
          <Image
            className='bg-[#6E707A] text-white rounded-full mt-5 px-2 py-2 cursor-default hover:cursor-pointer'
            onClick={handleLocalCity}
            src='/my_location.svg'
            alt='img-location'
            width={30}
            height={30}
          />
        </div>

        {isOpen && (
          <div className='fixed left-0 top-0 w-[100%] bg-[#1E213A] h-full border-r border-r-gray-900 pb-5 mb-5 ease-in-out duration-500'>
            <div
              className='flex justify-end items-center text-[#E7E7EB] px-10 pb-5 my-5'
              onClick={handleClick}
            >
              <AiOutlineClose
                className='cursor-default hover:cursor-pointer'
                size={30}
              />
            </div>
            <div className='flex justify-between items-center text-white'>
              <div className='flex justify-between items-center border border-solid border-[#616475] px-2 py-2'>
                <div>
                  <Image
                    className='bg-[#1E213A] rounded-full'
                    src='/search.svg'
                    alt='img-location'
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <input
                    className='outline-none bg-[#1E213A] px-4'
                    id='search'
                    type='text'
                    onChange={handleChange}
                    name=''
                    placeholder='search location'
                  />
                </div>
              </div>
              <CustomButton
                title='Search'
                containerStyles='bg-[#3C47E9] text-[#E7E7EB] px-8 py-3 pb-2'
                handleClick={handleClick}
              ></CustomButton>
            </div>
            <div
              onClick={() => {
                selectedCity("London");
              }}
              className='border border-solid border-[#616475] p-10 m-10 text-white cursor-default hover:cursor-pointer'
            >
              <span>London</span>
            </div>
            <div
              onClick={() => {
                selectedCity("Barcelona");
              }}
              className='border border-solid border-[#616475] p-10 m-10 text-white cursor-default hover:cursor-pointer'
            >
              <span>Barcelona</span>
            </div>
            <div
              onClick={() => {
                selectedCity("Long Beach");
              }}
              className='border border-solid border-[#616475] p-10 m-10 text-white cursor-default hover:cursor-pointer'
            >
              <span>Long Beach</span>
            </div>
          </div>
        )}

        <CurrentWeather
          imgCurrent={imgCurrent}
          temp={temp}
          units={units}
          weatherMain={weatherMain}
          city={searchCity}
        />
      </section>
      <section className='bg-[#100E1D] text-white max-w-[1200px] h-full md:col-start-2 col-span-4'>
        <div className='flex justify-end items-center px-4'>
          <CustomButton
            title='°C'
            containerStyles='bg-white text-black rounded-full mt-20 px-3 py-2'
            handleClick={handleUnitsC}
          ></CustomButton>
          <CustomButton
            title='°F'
            containerStyles='bg-[#585676] text-[#E7E7EB] rounded-full mt-20 px-3 py-2'
            handleClick={handleUnitsF}
          ></CustomButton>
        </div>
        <div className='bg-[#100E1D] mx-6 px-5 py-6 grid grid-cols-2 md:grid-cols-6 gap-6'>
          <Forecast
            index={1}
            min={dailyMin}
            max={dailyMax}
            units={units}
            dailyIcon={dailyIcon}
          />
          <Forecast
            index={2}
            min={dailyMin1}
            max={dailyMax1}
            units={units}
            dailyIcon={dailyIcon1}
          />
          <Forecast
            index={3}
            min={dailyMin2}
            max={dailyMax2}
            units={units}
            dailyIcon={dailyIcon2}
          />
          <Forecast
            index={4}
            min={dailyMin3}
            max={dailyMax3}
            units={units}
            dailyIcon={dailyIcon3}
          />
          <Forecast
            index={5}
            min={dailyMin4}
            max={dailyMax4}
            units={units}
            dailyIcon={dailyIcon4}
          />
        </div>
        <div>
          <div className='mx-6 px-5 py-6'>
            <h1>Today's Highlights</h1>
          </div>
          <div className='bg-[#100E1D] text-white max-w-[1015px] mx-3 px-2 py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-2'>
            <Wind
              windSpeed={windSpeed}
              units={units}
              windDegrees={windDegrees}
            />
            <Humidity humidity={humidity} />
            <Visibility visibility={visibility} units={units} />
            <Pressure pressure={pressure} />
          </div>
        </div>
      </section>
    </main>
  );
}
