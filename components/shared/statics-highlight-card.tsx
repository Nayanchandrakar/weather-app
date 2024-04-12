import { AllHTMLAttributes, FC } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StaticsCardProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  badgeTitle?: string;
}

const StaticsCard: FC<StaticsCardProps> = ({
  className,
  title,
  children,
  badgeTitle,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-background border p-3 rounded-md w-full h-fit",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-between">
        <p className="text-foreground/70 ">{title}</p>
        {badgeTitle ? <Badge>{badgeTitle}</Badge> : <p />}
      </span>

      {children}
    </div>
  );
};

export default StaticsCard;
