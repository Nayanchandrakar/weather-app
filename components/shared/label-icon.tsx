import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { AllHTMLAttributes, FC } from "react";

interface LabelIconProps extends AllHTMLAttributes<HTMLDivElement> {
  Icon: LucideIcon;
  Label: string;
}

const LabelIcon: FC<LabelIconProps> = ({
  Icon,
  Label,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)} {...props}>
      <Icon className="size-5 text-foreground/90" />
      <span
        className={cn(
          "text-foreground/50 text-sm font-medium",
          !Label && "italic"
        )}
      >
        {Label ? Label : "no data."}
      </span>
    </div>
  );
};

export default LabelIcon;
