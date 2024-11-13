import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_JANUARY_2024 } from "./months/1-january";
import { TRANSACTIONS_FEBRUARY_2024 } from "./months/2-february";
import { TRANSACTIONS_MARCH_2024 } from "./months/3-march";
import { TRANSACTIONS_APRIL_2024 } from "./months/4-april";
import { TRANSACTIONS_MAY_2024 } from "./months/5-may";
import { TRANSACTIONS_JUNE_2024 } from "./months/6-june";
import { TRANSACTIONS_JULY_2024 } from "./months/7-july";
import { TRANSACTIONS_AUGUST_2024 } from "./months/8-august";
import { TRANSACTIONS_SEPTEMBER_2024 } from "./months/9-september";
import { TRANSACTIONS_OCTOBER_2024 } from "./months/10-october";
import { TRANSACTIONS_NOVEMBER_2024 } from "./months/11-november";


export const TRANSACTIONS_2024: Transaction[] = [
  ...TRANSACTIONS_JANUARY_2024,
  ...TRANSACTIONS_FEBRUARY_2024,
  ...TRANSACTIONS_MARCH_2024,
  ...TRANSACTIONS_APRIL_2024,
  ...TRANSACTIONS_MAY_2024,
  ...TRANSACTIONS_JUNE_2024,
  ...TRANSACTIONS_JULY_2024,
  ...TRANSACTIONS_AUGUST_2024,
  ...TRANSACTIONS_SEPTEMBER_2024,
  ...TRANSACTIONS_OCTOBER_2024,
  ...TRANSACTIONS_NOVEMBER_2024
];
