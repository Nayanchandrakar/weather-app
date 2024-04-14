"use client";
import RenderWeather from "@/components/shared/render-weather";
import { getUnitHtmlCode } from "@/lib/utils";
import { forecastListInterface } from "@/types/api-response-datatype";
import dayjs from "dayjs";
import { FC } from "react";

interface ForecastTimingProps {
  weatherData: forecastListInterface[];
  units: string | null | undefined;
}

const ForecastTiming: FC<ForecastTimingProps> = ({ units, weatherData }) => {
  return (
    <section className="flex gap-4 flex-col size-full">
      <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {weatherData
          ?.filter((item, index) => index < 6)
          ?.map((weather) => (
            <RenderWeather
              key={weather?.dt_txt}
              temperatureData={getUnitHtmlCode(weather?.main?.temp, units)}
              timing={`${dayjs(weather?.dt_txt).format("h A")}`}
              weatherStat={weather?.weather?.[0]?.icon}
            />
          ))}
      </div>

      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {weatherData
          ?.filter((item, index) => index < 6)
          ?.map((weather) => (
            <RenderWeather
              key={weather?.dt_txt}
              temperatureData={`${weather?.wind?.speed} km/h`}
              timing={`${dayjs(weather?.dt_txt).format("h A")}`}
              rotateValue={weather?.wind?.deg}
            />
          ))}
      </div>
    </section>
  );
};

export default ForecastTiming;
