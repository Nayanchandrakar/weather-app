"use server";

import { citiesDataInterface } from "@/types/api-response-datatype";

const fetchCities = async (limits: number): Promise<citiesDataInterface[]> => {
  try {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-500/records?limit=${limits}`
    );

    const outputData = await response?.json();
    const finalData = outputData?.results;

    return finalData;
  } catch (error) {
    return [];
  }
};

export default fetchCities;
