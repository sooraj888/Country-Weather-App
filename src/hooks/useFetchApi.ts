import axios from "axios";
import { type } from "os";
import React, { useEffect, useState } from "react";

const useFetchApi = (value: string, trigerApi: boolean, ApiUrl: string) => {
  const [data, setData] = useState("");
  const [error, setError] = useState({ type: 0, messge: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDataFromApi() {
      console.log("initiate");
      try {
        setIsLoading(true);
        const responce = await axios.get(ApiUrl + value);

        if (responce.data.success === false) {
          setError({ type: 400, messge: "please provide valide input" });
        } else {
          console.log(responce.data);
          setData(responce.data);
        }
      } catch (e: any) {
        setError({ type: 500, messge: JSON.stringify(e) });
      } finally {
        setIsLoading(false);
      }
    }

    if (value && ApiUrl) fetchDataFromApi();
  }, [trigerApi]);

  return { data, error, isLoading };
};

export default useFetchApi;
