"use client";

import { cn } from "@/lib/utils";
import { AllHTMLAttributes, FC, useEffect } from "react";
import { toast } from "sonner";

interface ErrorPageProps extends AllHTMLAttributes<HTMLDivElement> {
  errorMessage: string;
  toastMessage: string;
}

const ErrorPage: FC<ErrorPageProps> = ({
  errorMessage,
  toastMessage,
  className,
  ...props
}) => {
  useEffect(() => {
    toast(toastMessage);
  }, [toastMessage, errorMessage]);

  return (
    <div
      className={cn(
        "w-full h-[calc(100vh_-_74px)]  text-xl font-normal text-foreground/80 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorPage;
