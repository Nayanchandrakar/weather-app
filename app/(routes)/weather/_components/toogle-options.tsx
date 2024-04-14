"use client";

import { FC, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { unitOptions } from "@/constant/units";
import { Button } from "@/components/ui/button";
import { LocateFixed } from "lucide-react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface searchParamsInterface {
  lat: number;
  lon: number;
  units: string | null | undefined;
}

interface ToogleOptionsProps {
  searchParams: searchParamsInterface;
}

const ToogleOptions: FC<ToogleOptionsProps> = ({ searchParams }) => {
  const [selectedOption, setselectedOption] = useState(unitOptions[0]?.value);

  const router = useRouter();

  const navigateParams = (params: searchParamsInterface) => {
    const url = qs.stringifyUrl(
      {
        url: "/weather",
        query: {
          ...params,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router?.push(url);
  };

  // Geolocation API
  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          navigateParams({
            ...searchParams,
            lat,
            lon,
          });
          toast(`${lat}  ${lon} location data!`);
        },
        (error) => {
          toast("Error getting location: " + error.message);
        }
      );
    } else {
      toast("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    navigateParams({
      ...searchParams,
      units: selectedOption,
    });
  }, [selectedOption, searchParams]);

  return (
    <section className="flex justify-between items-center">
      <Select
        onValueChange={setselectedOption}
        defaultValue={unitOptions?.[0]?.value}
      >
        <SelectTrigger className="w-[110px] md:w-[180px]">
          <SelectValue placeholder="select a unit" />
        </SelectTrigger>
        <SelectContent>
          {unitOptions?.map((unit) => (
            <SelectItem key={unit?.id} value={unit?.value}>
              {unit?.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={getGeoLocation}
        className="rounded-full bg-violet-500 hover:bg-violet-500/90 text-white "
      >
        <LocateFixed className="size-5 mr-2" />
        Current Location
      </Button>
    </section>
  );
};

export default ToogleOptions;
