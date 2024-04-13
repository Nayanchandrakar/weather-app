import { tempCurrentWeather } from "@/constant/constant";
import { getUnits } from "@/lib/utils";
import type { currentWeatherDataInterface } from "@/types/api-response-datatype";

interface getCurrentWeatherInterface {
  lat: number;
  lon: number;
  units?: string;
}

const getCurrentWeather = async ({
  lat,
  lon,
  units,
}: getCurrentWeatherInterface): Promise<currentWeatherDataInterface> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${getUnits(
        units
      )}&appid=${process?.env?.NEXT_PUBLIC_OPEN_WEATHER_API}`
    );

    const finalData = await response?.json();

    return finalData;
  } catch (error) {
    console.log(error);
    return tempCurrentWeather;
  }
};

export default getCurrentWeather;
