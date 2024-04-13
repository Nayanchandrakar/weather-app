import { AllHTMLAttributes, FC } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface RenderWeatherProps extends AllHTMLAttributes<HTMLSpanElement> {
  timing: string;
  weatherStat: string;
  temperatureData: string;
  imageClassName?: string;
}

const RenderWeather: FC<RenderWeatherProps> = ({
  className,
  weatherStat,
  temperatureData,
  timing,
  imageClassName,
  ...props
}) => {
  return (
    <span
      className={cn(
        "flex flex-col bg-background border p-3 rounded-md w-full h-fit",
        className
      )}
      {...props}
    >
      <span className="flex items-center flex-col gap-y-2 justify-between mt-4">
        <p className="text-foreground/70 ">{timing}</p>
        <Image
          src={"/images/04d.png"}
          alt="weather-image"
          width={1000}
          height={1000}
          sizes="100vw"
          className={cn("size-10", imageClassName)}
        />
        <p className="text-xl text-foreground/70 font-normal">
          {temperatureData}
        </p>
      </span>
    </span>
  );
};

export default RenderWeather;
