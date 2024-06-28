export const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = (param = "") => `${BASE_URL}/${param}`;

export const regionsArray: { value: string; title: string }[] = [
  {
    value: "africa",
    title: "Africa",
  },
  {
    value: "america",
    title: "America",
  },
  {
    value: "asia",
    title: "Asia",
  },
  {
    value: "europe",
    title: "Europe",
  },
  {
    value: "oceania",
    title: "Oceania",
  },
];
