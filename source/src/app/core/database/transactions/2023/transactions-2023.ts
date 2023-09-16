import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_APRIL_2023 } from "./months/4-april";
import { TRANSACTIONS_MAY_2023 } from "./months/5-may";
import { TRANSACTIONS_JUNE_2023 } from "./months/6-june";
import { TRANSACTIONS_JULY_2023 } from "./months/7-july";
import { TRANSACTIONS_AUGUST_2023 } from "./months/8-august";
import { TRANSACTIONS_SEPTEMBER_2023 } from "./months/9-september";


export const TRANSACTIONS_2023: Transaction[] = [
  ...TRANSACTIONS_APRIL_2023,
  ...TRANSACTIONS_MAY_2023,
  ...TRANSACTIONS_JUNE_2023,
  ...TRANSACTIONS_JULY_2023,
  ...TRANSACTIONS_AUGUST_2023,
  ...TRANSACTIONS_SEPTEMBER_2023
];
