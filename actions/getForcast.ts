import { tempCurrentWeather, tempForecastData } from "@/constant/constant";
import { getUnits } from "@/lib/utils";
import type { foreCastDataInterface } from "@/types/api-response-datatype";

interface getCurrentForecastInterface {
  lat: number;
  lon: number;
  units?: string;
}

const getCurrentForecast = async ({
  lat,
  lon,
  units,
}: getCurrentForecastInterface): Promise<foreCastDataInterface[]> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${getUnits(
        units
      )}&appid=${process?.env?.NEXT_PUBLIC_OPEN_WEATHER_API}`
    );

    const finalData = await response?.json();

    return finalData;
  } catch (error) {
    return [tempForecastData];
  }
};

export default getCurrentForecast;
