import fetchCities from "@/actions/client/fetchCities";
import InfiniteDataTable from "@/app/_components/infinite-data";
import { notFound } from "next/navigation";

interface HomePageProps {}

const HomePage = async ({}: HomePageProps) => {
  const data = await fetchCities(10);

  if (!data) notFound();

  return (
    <section className="relative">
      <div className="w-full h-screen  fixed inset-0 hero_gradient z-[-1]" />
      <InfiniteDataTable data={data} />
    </section>
  );
};

export default HomePage;
