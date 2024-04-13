"use client";
import { FC } from "react";
import { Sun } from "lucide-react";

import StaticsCard from "@/components/shared/statics-highlight-card";
import { currentWeatherDataInterface } from "@/types/api-response-datatype";
import dayjs from "dayjs";

interface DayStatsProps {
  data: currentWeatherDataInterface;
}

const DayStats: FC<DayStatsProps> = ({ data }) => {
  const sunrise = dayjs?.unix(data?.sys?.sunrise)?.format("H:mm A");
  const sunset = dayjs?.unix(data?.sys?.sunset)?.format("H:mm A");

  return (
    <StaticsCard title="Sunrise & Sunset">
      <div className="flex mt-4 items-center gap-x-4">
        <Sun className="size-10 text-foreground" />

        {/* map function  */}
        <div className="flex flex-row gap-x-4  ">
          <span className="flex gap-y-1 items-start justify-center flex-col">
            <text className="font-normal text-sm first-letter:uppercase text-foreground/60">
              Sunrise
            </text>

            <p className="text-2xl font-normal">{sunrise}</p>
          </span>

          <span className="flex gap-y-1 items-start justify-center flex-col">
            <text className="font-normal text-sm first-letter:uppercase text-foreground/60">
              Sunset
            </text>

            <p className="text-2xl font-normal">{sunset}</p>
          </span>
        </div>
      </div>
    </StaticsCard>
  );
};

export default DayStats;
