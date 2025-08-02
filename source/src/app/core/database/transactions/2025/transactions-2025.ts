import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_JANUARY_2025 } from "./months/1-january";
import { TRANSACTIONS_FEBRUARY_2025 } from "./months/2-february";
import { TRANSACTIONS_MARCH_2025 } from "./months/3-march";
import { TRANSACTIONS_APRIL_2025 } from "./months/4-april";
import { TRANSACTIONS_MAY_2025 } from "./months/5-may";
import { TRANSACTIONS_JUNE_2025 } from "./months/6-june";
import { TRANSACTIONS_JULY_2025 } from "./months/7-july";
import { TRANSACTIONS_AUGUST_2025 } from "./months/8-august";


export const TRANSACTIONS_2025: Transaction[] = [
  ...TRANSACTIONS_JANUARY_2025,
  ...TRANSACTIONS_FEBRUARY_2025,
  ...TRANSACTIONS_MARCH_2025,
  ...TRANSACTIONS_APRIL_2025,
  ...TRANSACTIONS_MAY_2025,
  ...TRANSACTIONS_JUNE_2025,
  ...TRANSACTIONS_JULY_2025,
  ...TRANSACTIONS_AUGUST_2025
];
