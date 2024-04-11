interface WeatherPageProps {
  params: {
    cityName: string;
  };
}

const WeatherPage = ({ params }: WeatherPageProps) => {
  return <div>WeatherPage</div>;
};

export default WeatherPage;
