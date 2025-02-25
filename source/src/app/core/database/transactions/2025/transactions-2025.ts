import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_JANUARY_2025 } from "./months/1-january";
import { TRANSACTIONS_FEBRUARY_2025 } from "./months/2-february";


export const TRANSACTIONS_2025: Transaction[] = [
  ...TRANSACTIONS_JANUARY_2025,
  ...TRANSACTIONS_FEBRUARY_2025
];
