import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const CountryInput = () => {
  const CountryAPI_URL = "https://restcountries.com/v3.1/name/";

  const [countryName, setCountryName] = useState<string>("");
  const [trigerCountryApi, setTriggerCountryAPI] = useState(false);
  const [triggerWeatherAPI, settriggerWeatherApi] = useState(false);

  const { data, error, isLoading } = useFetchApi(
    countryName,
    trigerCountryApi,
    CountryAPI_URL
  );

  // const weatherAPI_data=useFetchApi()

  const navigate = useNavigate();
  const handleOnCountryformSubmit = (e: any) => {
    e.preventDefault();
    setTriggerCountryAPI((value) => !value);
  };

  const handleOnCountryNameChange = (e: any) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
    if (data) {
      navigate("/countryDetails", { state: { data: data } });
    }
  }, [data]);

  if (error.type !== 0) {
    return <></>;
  }
  return (
    <form onSubmit={handleOnCountryformSubmit}>
      <input
        type="text"
        value={countryName}
        onChange={handleOnCountryNameChange}
      ></input>
      <button type="submit">
        {isLoading ? "loading pleace waite" : "submit"}
      </button>
    </form>
  );
};

export default CountryInput;
