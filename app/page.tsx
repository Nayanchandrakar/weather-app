import getCities from "@/actions/getCities";
import Container from "@/components/shared/container-component";
import { DataTable } from "@/app/_components/data-table";
import { citiesTableType, columns } from "@/app/_components/columns";

interface HomePageProps {}

const HomePage = async ({}: HomePageProps) => {
  // fetching cities api using server action --> server side
  const response = await getCities({ limits: 1 });

  const data: citiesTableType[] = response?.map((output, index) => ({
    id: index + 1,
    cityName: output?.name,
    country: output?.country,
    timezone: output?.timezone,
  }));

  return (
    <Container className="mt-16">
      <DataTable columns={columns} data={data} />
    </Container>
  );
};

export default HomePage;
