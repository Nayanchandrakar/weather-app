"use client";

import {
  FC,
  useState,
  KeyboardEvent,
  AllHTMLAttributes,
  useEffect,
} from "react";
import { Input } from "@/components/ui/input";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDebounceValue } from "usehooks-ts";
import { Loader2, MapPin } from "lucide-react";
import fetchSearch from "@/actions/client/fetchSearch";

interface SearchBarProps extends AllHTMLAttributes<HTMLDivElement> {}

interface searchResultsInterface {
  name: string;
  local_names: unknown;
  lat: number;
  lon: number;
  country?: string;
  state?: string;
}

const SearchBar: FC<SearchBarProps> = ({ className, ...props }) => {
  let defaultValue: string = "";

  const [debouncedValue, setValue] = useDebounceValue(defaultValue, 500);
  const [searchResults, setsearchResults] = useState<
    searchResultsInterface[] | []
  >([]);
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (debouncedValue) {
        const response = await fetchSearch(debouncedValue);
        if (response?.length > 0) {
          setsearchResults(response);
          console.log(searchResults);
        }
      }
    } catch (error) {
      // toast message display here
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [debouncedValue]);

  const handleSearch = (lat: number, lon: number) => {
    const url = qs.stringifyUrl(
      {
        url: "/weather",
        query: {
          lat,
          lon,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    setValue("");
    router?.push(url);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.code === "Enter") {
      handleSearch(searchResults[0]?.lat, searchResults[0]?.lon);
    }
  };

  //   const handleClear = () => {
  //     setValue("");
  //     handleSearch("");
  //   };

  return (
    <div
      className={cn("w-full transition-colors relative", className)}
      {...props}
    >
      <Input
        onChange={(e) => setValue(e?.target?.value)}
        type="text"
        onKeyUp={handleKeyUp}
        defaultValue={defaultValue}
        placeholder="Search for a city"
        className="flex items-center
         "
      />
      {debouncedValue && (
        <ul className="flex flex-col gap-y-1 border rounded-md bg-background absolute w-full mt-2 overflow-hidden text-sm  p-1 ">
          {(!IsLoading && searchResults?.length > 0)!! &&
            searchResults?.map((data: any) => (
              <li
                onClick={() => handleSearch(data?.lat, data?.lon)}
                className="px-3 hover:bg-muted/50  hover:text-foreground/90 cursor-pointer transition-colors duration-200 rounded-md py-2 text-foreground flex "
              >
                <MapPin className="size-5" />
                <span className="ml-4 flex flex-col ">
                  <p className="text-xs font-bold ">{data?.name}</p>
                  {data?.state && (
                    <p className="text-xs font-medium mt-1">{data?.state}</p>
                  )}
                </span>
              </li>
            ))}
          {IsLoading && (
            <span className="px-3 hover:bg-muted/50  hover:text-foreground/90 cursor-pointer transition-colors duration-200 rounded-md py-2 text-foreground flex h-[4rem] items-center justify-center w-full">
              <Loader2 className="size-6 text-sky-600 animate-spin" />
            </span>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
