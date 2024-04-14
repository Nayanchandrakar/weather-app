// Libraries
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import { getUnitHtmlCode } from "@/lib/utils";

// static imports
import ForecastTiming from "./_components/forecast-times";
import ToogleOptions from "./_components/toogle-options";
import AirQualityIndex from "./_components/air-quality-index";
import ForeCastCurrent from "./_components/current-forecast";
import DayStats from "./_components/day-stats-component";

import Container from "@/components/shared/container-component";
import HightLightMiniCard from "@/components/shared/highlight-mini-card";
import { CircleGauge, Droplet, Eye, ThermometerSun } from "lucide-react";
import StaticsCard from "@/components/shared/statics-highlight-card";
import CurrentWeatherCard from "@/components/shared/current-weather-card";
import getCurrentAirData from "@/actions/getAirData";
import getCurrentWeather from "@/actions/getCurrentWeather";
import getCurrentForecast from "@/actions/getForcast";
import ErrorPage from "@/components/shared/error-component";

interface WeatherPageProps {
  searchParams: {
    lat: number;
    lon: number;
    units: string;
  };
}

const WeatherPage = async ({ searchParams }: WeatherPageProps) => {
  const { lat, lon, units } = searchParams;

  if (!lat || !lon) {
    return redirect("/");
  }

  const currentWeatherData = await getCurrentWeather(searchParams);

  if (!(currentWeatherData?.cod === 200)) {
    return (
      <ErrorPage
        errorMessage="There is No Location."
        toastMessage="Select a differend place!"
      />
    );
  }

  const airData = await getCurrentAirData(searchParams);
  const currentForeCastData = await getCurrentForecast(searchParams);

  const todayDate = new Date();
  const todayForecast = currentForeCastData?.list?.filter(
    (data) => Number(dayjs(data?.dt_txt)?.format("D")) == todayDate?.getDate()
  );

  return (
    <Container className="mt-16 ">
      <ToogleOptions searchParams={searchParams} />

      <section className="grid min-[1500px]:grid-flow-col gap-4 mt-8">
        <div className="flex flex-col gap-4">
          <CurrentWeatherCard weatherData={currentWeatherData} units={units} />
          <ForeCastCurrent forecastData={currentForeCastData} units={units} />
        </div>

        <section className="grid grid-row-2 h-fit gap-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Air quality index and humidity + pressure section  */}
            <div className="flex flex-col gap-4">
              <AirQualityIndex data={airData} />
              <div className="grid grid-flow-col gap-4">
                <HightLightMiniCard
                  title="Humidity"
                  Icon={Droplet}
                  data={`${currentWeatherData?.main?.humidity}%`}
                />

                <HightLightMiniCard
                  title="Pressure"
                  Icon={CircleGauge}
                  data={`${currentWeatherData?.main?.pressure}hPa`}
                />
              </div>
            </div>

            {/* Sunrise , Sunset  and visibility + feels like section  */}
            <div className="flex flex-col gap-4">
              <DayStats data={currentWeatherData} />

              <div className="grid grid-flow-col gap-4">
                <HightLightMiniCard
                  title="Visibility"
                  Icon={Eye}
                  data={`${currentWeatherData?.visibility / 1000}km`}
                />
                <HightLightMiniCard
                  title="Feels Like"
                  Icon={ThermometerSun}
                  data={getUnitHtmlCode(
                    currentWeatherData?.main?.feels_like!,
                    units
                  )}
                />
              </div>
            </div>
          </div>

          <StaticsCard title="Today at">
            <ForecastTiming weatherData={todayForecast} units={units} />
          </StaticsCard>
        </section>
      </section>
    </Container>
  );
};

export default WeatherPage;
