import { AllHTMLAttributes, FC } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface HightLightMiniCardProps extends AllHTMLAttributes<HTMLSpanElement> {
  title: string;
  Icon: LucideIcon;
  data: string;
}

const HightLightMiniCard: FC<HightLightMiniCardProps> = ({
  className,
  Icon,
  data,
  title,
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
      <p className="text-foreground/70 ">{title}</p>
      <span className="flex items-center justify-between mt-4">
        <Icon className="size-10 text-foreground" />
        <p
          dangerouslySetInnerHTML={{ __html: data }}
          className={cn("text-2xl font-normal", !data && "italic")}
        />
      </span>
    </span>
  );
};

export default HightLightMiniCard;
