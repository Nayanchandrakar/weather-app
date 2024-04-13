import StaticsCard from "@/components/shared/statics-highlight-card";
import { airQualityIndexStatus } from "@/lib/utils";
import { airDataInterface } from "@/types/api-response-datatype";
import { Wind } from "lucide-react";
import { FC } from "react";

interface AirQualityIndexProps {
  data: airDataInterface;
}

const AirQualityIndex: FC<AirQualityIndexProps> = ({ data }) => {
  const gases = data?.list[0]?.components;

  return (
    <StaticsCard
      title="hellow"
      badgeTitle={airQualityIndexStatus(data?.list?.[0]?.main?.aqi)}
    >
      <div className="flex mt-4 items-center gap-x-4">
        <Wind className="size-10 text-foreground" />

        {/* map function  */}
        <div
          id="custom_scrollbar"
          className="flex flex-row gap-x-4 overflow-x-scroll "
        >
          {Object?.entries(gases)?.map(([key, value]) => (
            <span className="flex gap-y-1 items-center justify-center flex-col">
              <text className="font-normal text-sm uppercase text-foreground/60">
                {key}
              </text>

              <p className="text-2xl font-normal">{value}</p>
            </span>
          ))}
        </div>
      </div>
    </StaticsCard>
  );
};

export default AirQualityIndex;
