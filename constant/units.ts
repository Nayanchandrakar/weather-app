import { temperatureStandards } from "@/lib/utils";

export type unitsType = {
  label: string;
  id: number;
  value: string;
};

export const unitOptions: unitsType[] = [
  { id: 345345, label: "Kelvin", value: temperatureStandards[0] },
  { id: 345345, label: "Celsius", value: temperatureStandards[1] },
  { id: 56487567, label: "Farenhit", value: temperatureStandards[2] },
];
