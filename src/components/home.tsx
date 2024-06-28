import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { CountryCards } from "./country-cards";
import { RegionSelect } from "./region-select";
import { useState } from "react";
import { regionsArray } from "@/constants";

export function Home() {
  const [search, setSearch] = useState("");
  const [currentRegion, setCurrentRegion] = useState("");

  return (
    <div className="container">
      <div className="flex justify-between py-8">
        <div className="relative w-80">
          <Input
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            id="search"
            className="pl-10"
            type="text"
            placeholder="Search for a country"
          />
          <span className="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search className="size-6 text-muted-foreground" />
          </span>
        </div>
        <RegionSelect
          regionsArray={regionsArray}
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
        />
      </div>
      <CountryCards searchInput={search} currentRegion={currentRegion} />
    </div>
  );
}
