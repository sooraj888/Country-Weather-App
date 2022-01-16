import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const CountryDetails = () => {
  const localState: any = useLocation().state;
  const [localData, setLocalData] = useState<any>("");
  const [hideWeatherData, setHideWeatherData] = useState(true);

  const [triggerWeatherApi, setTriggerWeatherApi] = useState(false);

  const [capitalOfCountry, setCapitalOfCountry] = useState("");

  const [weatherData, setWeatherData] = useState<any>("");
  //  localData?.capital
  const weatherApi_URL =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const { data, error, isLoading } = useFetchApi(
    capitalOfCountry,
    triggerWeatherApi,
    weatherApi_URL
  );

  const handlOnWeatherBtnClick = () => {
    if (!data) {
      setCapitalOfCountry(localData?.capital);
      console.log("data found");
      setTriggerWeatherApi((value) => !value);
    }
    setHideWeatherData((value) => !value);
  };

  useEffect(() => {
    setWeatherData(data);
  }, [data]);
  useEffect(() => {
    if (!localState?.data) {
    } else {
      setLocalData(localState?.data?.[0]);
    }
  }, []);

  useEffect(() => {
    console.log("localData", localData);
  }, [localData]);

  return (
    <div className="countryDetailsPage">
      <div>Country: {localData?.name?.common}</div>
      <div>capital : {localData?.capital}</div>
      <div>population:{localData?.population}</div>

      <img alt="asd" src={localData?.flags?.png}></img>
      <div>LatLng : {localData.latlng}</div>
      <button onClick={handlOnWeatherBtnClick}>
        {isLoading ? "loading" : "capital - Weather"}
      </button>
      {!isLoading && weatherData && !hideWeatherData ? (
        <div className="weatherReport">
          <div>
            Weather_descriptions:{weatherData?.current?.weather_descriptions}
          </div>
          <img
            src={weatherData?.current?.weather_icons}
            alt="weathericon"
          ></img>
          <div>temprature:{weatherData?.current?.temperature}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountryDetails;
