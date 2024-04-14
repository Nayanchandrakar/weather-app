import { AllHTMLAttributes, FC } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface RenderWeatherProps extends AllHTMLAttributes<HTMLSpanElement> {
  timing: string;
  weatherStat?: string;
  temperatureData: string;
  rotateValue?: number;
}

const RenderWeather: FC<RenderWeatherProps> = ({
  className,
  weatherStat,
  temperatureData,
  timing,
  rotateValue,
  ...props
}) => {
  const weahterImage = weatherStat
    ? `/images/${weatherStat}.png`
    : "/images/direction.png";

  return (
    <span
      className={cn(
        "flex flex-col bg-background border p-3 rounded-md w-full  h-fit  overflow-hidden ",
        className
      )}
      {...props}
    >
      <span className="flex items-center flex-col gap-y-2 justify-between mt-4">
        <p className="text-foreground/70 text-xs md:text-sm lg:text-base">
          {timing}
        </p>
        <Image
          src={weahterImage}
          alt="weather-image"
          width={1000}
          height={1000}
          sizes="100vw"
          className="size-10 "
          style={{ rotate: rotateValue ? `${rotateValue}deg` : "unset" }}
        />
        <p
          dangerouslySetInnerHTML={{ __html: temperatureData }}
          className="text-sm md:text-base lg:text-xl  text-foreground/70 font-normal truncate"
        />
      </span>
    </span>
  );
};

export default RenderWeather;
