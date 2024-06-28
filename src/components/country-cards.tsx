import { useEffect, useState } from "react";

import { Card } from "./card";
import { BASE_URL } from "@/constants";

export const CountryCards = ({
  searchInput,
  currentRegion,
}: {
  searchInput: string;
  currentRegion: string;
}) => {
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/all?fields=name,capital,population,region,flags`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    // if (currentRegion.length !== 0) {

    // }

    if (searchInput.length > 0) {
      const filteredArr = data.filter((item) =>
        item.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );

      setSearchedData(filteredArr);
    } else {
      setSearchedData(data);
    }
  }, [searchInput, data]);

  return (
    <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-0 md:justify-between gap-y-[54px]">
      {searchedData?.map((country) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Card key={country?.name?.common} data={country} />
      ))}
    </div>
  );
};
