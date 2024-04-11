import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeDuplicates = <T>(arr: Array<T>) => {
  const uniqueSet = new Set();

  arr.forEach((obj) => {
    const objString = JSON.stringify(obj);
    uniqueSet.add(objString);
  });

  const uniqueArray = Array.from(uniqueSet).map((objString: any) =>
    JSON.parse(objString)
  );

  return uniqueArray;
};
