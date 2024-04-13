import { AllHTMLAttributes, FC } from "react";

import { cn, getUnitHtmlCode } from "@/lib/utils";
import Image from "next/image";
import LabelIcon from "./label-icon";
import { Calendar, MapPin } from "lucide-react";
import { currentWeatherDataInterface } from "@/types/api-response-datatype";
import dayjs from "dayjs";

interface CurrentWeatherCardProps extends AllHTMLAttributes<HTMLDivElement> {
  weatherData: currentWeatherDataInterface;
  units: string;
}

const CurrentWeatherCard: FC<CurrentWeatherCardProps> = ({
  className,
  weatherData,
  units,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-background border p-6 rounded-md w-full h-fit",
        className
      )}
      {...props}
    >
      <p className="text-foreground/90 ">Now</p>
      <span className="flex items-start justify-between flex-col ">
        <span className="flex items-center gap-x-4">
          <p
            dangerouslySetInnerHTML={{
              __html: getUnitHtmlCode(weatherData?.main?.temp, units),
            }}
            className="text-5xl text-foreground font-semibold"
          />

          <Image
            src={`/images/${weatherData?.weather?.[0]?.icon}.png`}
            alt="weatherImage"
            width={1000}
            height={1000}
            sizes="100vw"
            className="size-20"
          />
        </span>

        {/* weather current condition like haze , fog  etc */}
        <text className="text-foreground/80 ">
          {weatherData?.weather?.[0]?.main}
        </text>

        {/* weather description here  */}
        <p className="font-medium text-sm text-foreground mb-4">
          {weatherData?.weather?.[0]?.description}
        </p>

        <span className="w-full border" />

        <span className="flex flex-col gap-y-3 mt-4">
          <LabelIcon
            Icon={Calendar}
            Label={`${dayjs(weatherData?.timezone)?.format("dddd, D MMM")}`}
          />
          <LabelIcon
            Icon={MapPin}
            Label={`${weatherData?.name} ${weatherData?.sys?.country}`}
          />
        </span>

        {/* <p className="text-2xl font-normal">{}</p> */}
      </span>
    </div>
  );
};

export default CurrentWeatherCard;
