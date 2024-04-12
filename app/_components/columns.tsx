"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import qs from "query-string";

// This type is used to define the shape of our data.

export type citiesTableType = {
  id: number | string;
  cityName: string;
  country: string;
  timezone: string;
};

export const columns: ColumnDef<citiesTableType>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id = row.getValue("id") as string;

      return (
        <span className="text-right font-medium cursor-pointer">
          {id?.split("~")?.[0]}
        </span>
      );
    },
    accessorKey: "id",
  },

  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    accessorKey: "cityName",
    cell: ({ row }) => {
      const cityName = row.getValue("cityName") as string;

      const id = row.getValue("id") as string;
      const splittedData = id?.split(`~`);

      const lat = splittedData?.[1];
      const lon = splittedData?.[2];

      const handleToogle = () => {
        const updatedQuery = {
          lon,
          lat,
        };

        const url = qs.stringifyUrl(
          {
            url: "/weather",
            query: updatedQuery,
          },
          { skipNull: true, skipEmptyString: true }
        );

        window.open(url);
      };

      return (
        <span
          onClick={handleToogle}
          className="text-right font-medium cursor-pointer"
        >
          {cityName}
        </span>
      );
    },
  },

  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "country",
  },

  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time zone
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "timezone",
  },
];
