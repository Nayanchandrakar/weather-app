"use client";

import { FC, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { unitOptions } from "@/constant/units";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocateFixed } from "lucide-react";

interface ToogleOptionsProps {
  isCollapsed: boolean;
}

const ToogleOptions: FC<ToogleOptionsProps> = ({ isCollapsed }) => {
  const [selectedOption, setselectedOption] = useState(unitOptions[0]?.label);

  return (
    <section className="flex justify-between items-center">
      <div className="max-w-[7rem] w-full">
        <Select defaultValue={selectedOption} onValueChange={setselectedOption}>
          <SelectTrigger
            className={cn(
              "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
              isCollapsed &&
                "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
            )}
            aria-label="Select unit"
          >
            <SelectValue placeholder="Select an unit">
              <span className={cn("ml-2", isCollapsed && "hidden")}>
                {
                  unitOptions.find((unit) => unit?.label === selectedOption)
                    ?.label
                }
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {unitOptions?.map((Data) => {
              return (
                <SelectItem key={Data?.id} value={Data?.label}>
                  <div className="flex items-center gap-3 ">{Data?.label}</div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <Button className="rounded-full bg-violet-500 hover:bg-violet-500/90 text-white ">
        <LocateFixed className="size-5 mr-2" />
        Current Location
      </Button>
    </section>
  );
};

export default ToogleOptions;
