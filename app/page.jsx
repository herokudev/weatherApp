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
  const [searchCity, setSearchCity] = useState("Helsinki");
  const [apiCoord, setApiCoord] = useState({});
  const [units, setUnits] = useState("metric");

  const fetchCoordinates = async (searchCity) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    try {
      const response = await axios.get(url);
      const propertyValues = Object.values(response.data.coord);
      setApiCoord(propertyValues);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCoordinates(searchCity);
  }, [searchCity]);

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
    setDegrees("metric");
  };

  const handleUnitsF = () => {
    setDegrees("imperial");
  };

  return (
    <main className='max-w-[1280px] grid sm:grid-cols-1 md:grid-cols-2'>
      <section className='bg-[#1E213A] max-w-[3755px] h-full'>
        <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-10 pt-10 pb-10 text-white'>
          <CustomButton
            title='Search for Places'
            containerStyles='bg-[#6E707A] text-[#E7E7EB] mt-20 px-2 py-2'
            handleClick={handleClick}
          ></CustomButton>
          <Image
            className='bg-[#6E707A] text-white rounded-full mt-20 px-2 py-2 cursor-default hover:cursor-pointer'
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
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 pb-10 text-white'>
              <div className='flex justify-between items-center border border-solid border-[#616475] px-2 py-2'>
                <div>
                  <Image
                    className='bg-[#1E213A] rounded-full'
                    src='/search.svg'
                    alt='img-location'
                    width={30}
                    height={30}
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

        {console.log("apiCoordinates final:lon --> " + apiCoord[0])}
        {console.log("apiCoordinates final:lat --> " + apiCoord[1])}

        <CurrentWeather city={searchCity} />
      </section>
      <section className='bg-[#100E1D] text-white max-w-[1015px] h-full'>
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
        <div className='bg-[#100E1D] mx-6 px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-10'>
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <div>
          <div className='mx-6 px-5 py-6'>
            <h1>Today's Highlights</h1>
          </div>
          <div className='bg-[#100E1D] text-white max-w-[1015px] mx-6 px-5 py-6 grid sm:grid-cols-1 md:grid-cols-2'>
            <Wind />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
        </div>
      </section>
    </main>
  );
}
