import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_JANUARY_2024 } from "./months/1-january";
import { TRANSACTIONS_FEBRUARY_2024 } from "./months/2-february";
import { TRANSACTIONS_MARCH_2024 } from "./months/3-march";
import { TRANSACTIONS_APRIL_2024 } from "./months/4-april";


export const TRANSACTIONS_2024: Transaction[] = [
  ...TRANSACTIONS_JANUARY_2024,
  ...TRANSACTIONS_FEBRUARY_2024,
  ...TRANSACTIONS_MARCH_2024,
  ...TRANSACTIONS_APRIL_2024
];
