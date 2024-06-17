import { useEffect, useState } from "react";

import { Card } from "./card";
import { BASE_URL } from "@/constants";

export const CountryCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/all?fields=name,capital,population,region,flags`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log("state", data);

  return (
    <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-0 md:justify-between gap-y-[54px]">
      {data.map((country) => (
        <Card data={country} />
      ))}
    </div>
  );
};
