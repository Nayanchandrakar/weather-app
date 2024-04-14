import fetchCities from "@/actions/client/fetchCities";
import InfiniteDataTable from "@/app/_components/infinite-data";
import { notFound } from "next/navigation";

interface HomePageProps {}

const HomePage = async ({}: HomePageProps) => {
  const data = await fetchCities(10);

  if (!data) notFound();

  return (
    <section className="relative">
      <h1 className="flex items-center justify-center mt-16 text-[16vw] md:text-[8vw] font-bold w-full  bg-clip-text text-transparent bg-white dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400   font-nunito">
        cloud.io
      </h1>
      <div className="w-full h-screen  fixed inset-0 hero_gradient z-[-1]" />
      <InfiniteDataTable data={data} />
    </section>
  );
};

export default HomePage;
