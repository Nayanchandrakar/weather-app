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

export const temperatureStandards = ["", "metric", "imperial"];

export const getUnits = (units?: string) =>
  `&units=${units ? units : "standard"}`;

export const getUnitHtmlCode = (
  text: string | number,
  unit: string | undefined | null
) => {
  if (unit) {
    if (unit === temperatureStandards[1]) {
      // for celsius
      return `${text} &#8451;`;
    } else if (unit === temperatureStandards[2]) {
      // for farenhit
      return `${text} &#8457;`;
    }

    return `${text} &deg;`;
  }

  return `${text} &deg;`;
};

export const airQualityIndexStatus = (index: number) => {
  if (index) {
    if (index === 1) {
      return "good";
    } else if (index === 2) {
      return "fair";
    } else if (index === 3) {
      return "moderate";
    } else if (index === 4) {
      return "poor";
    }
    return "very poor";
  }
  return "very poor";
};
