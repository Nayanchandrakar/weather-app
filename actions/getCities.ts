import { citiesDataInterface } from "@/types/api-response-datatype";

interface getCitiesInterface {
  limits?: number;
}

const getCities = async ({
  limits = 2,
}: getCitiesInterface): Promise<citiesDataInterface[] | []> => {
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

export default getCities;
