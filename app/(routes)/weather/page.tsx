import Container from "@/components/shared/container-component";
import { redirect } from "next/navigation";
import ToogleOptions from "./_components/toogle-options";
import HightLightMiniCard from "@/components/shared/highlight-mini-card";
import { CircleGauge, Droplet, Eye, ThermometerSun } from "lucide-react";
import StaticsCard from "@/components/shared/statics-highlight-card";
import RenderWeather from "@/components/shared/render-weather";
import CurrentWeatherCard from "@/components/shared/current-weather-card";
import getCurrentAirData from "@/actions/getAirData";
import getCurrentWeather from "@/actions/getCurrentWeather";
import getCurrentForecast from "@/actions/getForcast";
import ErrorPage from "@/components/shared/error-component";
import AirQualityIndex from "./_components/air-quality-index";
import DayStats from "./_components/day-stats-component";
import { getUnitHtmlCode } from "@/lib/utils";

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
  // const currentForeCastData = await getCurrentForecast(searchParams);

  return (
    <Container className="mt-16 ">
      <ToogleOptions isCollapsed={false} />

      <section className="grid grid-flow-col gap-4 mt-8">
        <CurrentWeatherCard weatherData={currentWeatherData} units={units} />

        <section className="grid grid-row-2 ">
          <div className="grid grid-cols-2 gap-4">
            <AirQualityIndex data={airData} />
            <DayStats data={currentWeatherData} />
          </div>

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
            <HightLightMiniCard
              title="Visibility"
              Icon={Eye}
              data={`${currentWeatherData?.visibility / 1000}km`}
            />
            <HightLightMiniCard
              title="Feels Like"
              Icon={ThermometerSun}
              data={getUnitHtmlCode(
                currentWeatherData?.main?.feels_like,
                units
              )}
            />
          </div>
        </section>
      </section>

      {/* <div className="flex  gap-x-4 mt-6">
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
      </div> */}

      {/* <div className="flex  gap-x-4 mt-6">
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
        <RenderWeather temperatureData="-41c" timing="6AM" weatherStat="" />
      </div> */}
    </Container>
  );
};

export default WeatherPage;
