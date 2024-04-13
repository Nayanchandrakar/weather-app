"use client";
import { AllHTMLAttributes, FC } from "react";
import Image from "next/image";

import { cn, getUnitHtmlCode } from "@/lib/utils";

import { foreCastDataInterface } from "@/types/api-response-datatype";
import dayjs from "dayjs";

interface ForeCastCurrentProps extends AllHTMLAttributes<HTMLDivElement> {
  forecastData: foreCastDataInterface;
  units: string;
}

const ForeCastCurrent: FC<ForeCastCurrentProps> = ({
  className,
  forecastData,
  units,
  ...props
}) => {
  // function for removing multipe days data
  const seenDate = new Set();
  const result = forecastData?.list?.filter((data) => {
    const date = dayjs(data?.dt_txt)?.format("D");
    if (!seenDate?.has(date)) {
      seenDate?.add(date);
      return true;
    }
    return false;
  });

  return (
    <div
      className={cn(
        "flex flex-col bg-background border p-6 rounded-md w-full h-fit",
        className
      )}
      {...props}
    >
      <p className="text-foreground/90 ">{result?.length} Days Forecast</p>

      <div className="flex flex-col gap-y-4 mt-4 h-fit">
        {result?.map((data) => (
          <span className="flex items-center gap-y-4 justify-between mr-2">
            <span className="flex items-center gap-x-4">
              <Image
                src={`/images/${data?.weather?.[0]?.icon}.png`}
                alt="weatherImage"
                width={1000}
                height={1000}
                sizes="100vw"
                className="size-8"
              />
              <p
                className="text-foreground/80"
                dangerouslySetInnerHTML={{
                  __html: getUnitHtmlCode(data?.main?.temp, units),
                }}
              />
            </span>

            <span className="text-foreground/50 text-sm font-medium">
              {`${dayjs(data?.dt_txt)?.format("D MMM")}`}
            </span>
            <span className="text-foreground/50 text-sm font-medium">
              {`${dayjs(data?.dt_txt)?.format("dddd")}`}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ForeCastCurrent;
