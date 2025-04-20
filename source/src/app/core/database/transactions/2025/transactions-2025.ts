import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_JANUARY_2025 } from "./months/1-january";
import { TRANSACTIONS_FEBRUARY_2025 } from "./months/2-february";
import { TRANSACTIONS_MARCH_2025 } from "./months/3-march";
import { TRANSACTIONS_APRIL_2025 } from "./months/4-april";


export const TRANSACTIONS_2025: Transaction[] = [
  ...TRANSACTIONS_JANUARY_2025,
  ...TRANSACTIONS_FEBRUARY_2025,
  ...TRANSACTIONS_MARCH_2025,
  ...TRANSACTIONS_APRIL_2025
];
