"use client";
import { useEffect, useState } from "react";

import Container from "@/components/shared/container-component";
import DataTable from "@/app/_components/data-table";
import { citiesTableType, columns } from "@/app/_components/columns";
import { citiesDataInterface } from "@/types/api-response-datatype";
import { useIntersectionObserver } from "usehooks-ts";
import fetchCities from "@/actions/client/fetchCities";
import { removeDuplicates } from "@/lib/utils";

interface InfiniteDataTableInterface {
  data: citiesDataInterface[];
}

const InfiniteDataTable = ({ data }: InfiniteDataTableInterface) => {
  const [newData, setNewData] = useState<citiesDataInterface[]>(data);
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const [activityLoaded, setActivityLoaded] = useState<number>(20);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      fetchActions();
    }
  }, [isIntersecting]);

  const fetchActions = async () => {
    setIsLoading(true);
    try {
      const response = await fetchCities(activityLoaded);

      if (response && response?.length > 0) {
        // created a custom function to remove duplicates from array
        const removingDuplicates = removeDuplicates([...newData, ...response]);

        // new data set here in the state
        setNewData(removingDuplicates);

        // incrementing activityLoaded numbers by 10
        setActivityLoaded(activityLoaded + 10);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const outputData: citiesTableType[] = newData?.map((output) => ({
    id: `${output?.geoname_id}~${output?.coordinates?.lon}~${output?.coordinates?.lat}`,
    cityName: output?.name,
    country: output?.country,
    timezone: output?.timezone,
  }));

  console.log(newData);

  return (
    <Container className="mt-16  ">
      <DataTable
        columns={columns}
        data={outputData}
        ref={ref}
        IsLoading={IsLoading}
      />
    </Container>
  );
};

export default InfiniteDataTable;
