import { tempAirData } from "@/constant/constant";
import { getUnits } from "@/lib/utils";
import type { airDataInterface } from "@/types/api-response-datatype";

interface getCurrentAirDataInterface {
  lat: number;
  lon: number;
  units?: string;
}

const getCurrentAirData = async ({
  lat,
  lon,
  units,
}: getCurrentAirDataInterface): Promise<airDataInterface> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}${getUnits(
        units
      )}&appid=${process?.env?.NEXT_PUBLIC_OPEN_WEATHER_API}`
    );

    const finalData = await response?.json();

    return finalData;
  } catch (error) {
    return tempAirData;
  }
};

export default getCurrentAirData;
