import Container from "@/components/shared/container-component";
import { redirect } from "next/navigation";
import ToogleOptions from "./_components/toogle-options";
import HightLightMiniCard from "@/components/shared/highlight-mini-card";
import { Droplet } from "lucide-react";
import StaticsCard from "@/components/shared/statics-highlight-card";

interface WeatherPageProps {
  searchParams: {
    lat: number | null;
    lon: number | null;
  };
}

const WeatherPage = ({ searchParams }: WeatherPageProps) => {
  const { lat, lon } = searchParams;

  if (!lat || !lon) {
    return redirect("/");
  }

  return (
    <Container className="mt-16 ">
      <ToogleOptions isCollapsed={false} />
      <StaticsCard title="Air Quality Index" badgeTitle="bad">
        hellow
      </StaticsCard>
      <div className="flex  gap-x-4">
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
        <HightLightMiniCard title="Humidity" Icon={Droplet} data="73%" />
      </div>
    </Container>
  );
};

export default WeatherPage;
