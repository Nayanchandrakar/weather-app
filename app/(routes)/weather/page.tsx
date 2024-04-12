import Container from "@/components/shared/container-component";

interface WeatherPageProps {
  params: {
    cityName: string;
  };
}

const WeatherPage = ({ params }: WeatherPageProps) => {
  return <Container className="mt-16">WeatherPage</Container>;
};

export default WeatherPage;
