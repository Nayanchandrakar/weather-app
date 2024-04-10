import { forwardRef } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-8 w-full", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Container;
