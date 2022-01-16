import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
  const localState: any = useLocation().state;
  const [localData, setLocalData] = useState<any>("");
  useEffect(() => {
    if (!localState?.data) {
      //   console.log("asd", localState?.data?.[0]);
    } else {
      setLocalData(localState?.data?.[0]);
    }
  }, []);

  useEffect(() => {
    console.log("localData", localData);
  }, [localData]);

  return (
    <div>
      <>{localData?.capital}</>
      <div>{localData?.population}</div>
      {localData?.flags?.png || ""}

      <img alt="asd" src={localData?.flags?.png}></img>
    </div>
  );
};

export default CountryDetails;
