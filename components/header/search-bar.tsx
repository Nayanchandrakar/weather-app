"use client";

import {
  FC,
  useState,
  KeyboardEvent,
  AllHTMLAttributes,
  useEffect,
  useRef,
  ElementRef,
} from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Loader2, MapPin } from "lucide-react";
import { useDebounceValue, useOnClickOutside } from "usehooks-ts";

import { Input } from "@/components/ui/input";
import fetchSearch from "@/actions/client/fetchSearch";
import { cn } from "@/lib/utils";

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
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const menuRef = useRef<ElementRef<"div">>(null);

  const router = useRouter();

  const handleClickOutside = () => {
    setValue("");
  };

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

    handleClickOutside();
    router?.push(url);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchResults.length - 1)
      );
    } else if (e?.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e?.key === "Enter") {
      if (focusedIndex !== -1) {
        handleSearch(
          searchResults[focusedIndex].lat,
          searchResults[focusedIndex].lon
        );
      }
    }
  };

  useOnClickOutside(menuRef, handleClickOutside);

  useEffect(() => {
    fetchData();
  }, [debouncedValue]);

  return (
    <div
      ref={menuRef}
      className={cn("w-full transition-colors relative", className)}
      {...props}
    >
      <Input
        onChange={(e) => setValue(e?.target?.value)}
        type="text"
        onKeyUp={handleKeyUp}
        defaultValue={defaultValue}
        placeholder="Search for a city"
        className="flex items-center"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={
          debouncedValue && searchResults.length > 0 ? true : false
        }
        aria-owns="suggestion-list"
        aria-autocomplete="list"
        aria-controls="suggestion-list"
      />
      {debouncedValue && (
        <ul
          className="flex flex-col gap-y-1 border rounded-md bg-background absolute w-full mt-2 overflow-hidden text-sm  p-1 "
          role="listbox"
          tabIndex={-1}
        >
          {(!IsLoading && searchResults?.length > 0)!! &&
            searchResults?.map((data: any, index) => (
              <li
                key={index}
                onClick={() => handleSearch(data?.lat, data?.lon)}
                className={cn(
                  "px-3 hover:bg-muted/70  hover:text-foreground/90 cursor-pointer transition-colors duration-200 rounded-md py-2 text-foreground flex ",
                  focusedIndex === index && "bg-muted/70 text-foreground/90"
                )}
                role="option"
                aria-selected={focusedIndex === index!!}
                tabIndex={focusedIndex === index ? 0 : -1}
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
            <span className="px-3 hover:bg-muted/50  hover:text-foreground/90 cursor-pointer  rounded-md py-2 text-foreground flex h-[4rem] items-center justify-center w-full">
              <Loader2 className="size-6 text-sky-600 animate-spin" />
            </span>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
