export const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = (param = "") => `${BASE_URL}/${param}`;
