import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_APRIL } from "./months/4-april";
import { TRANSACTIONS_MAY } from "./months/5-may";


export const TRANSACTIONS_2023: Transaction[] = [
  ...TRANSACTIONS_APRIL,
  ...TRANSACTIONS_MAY
];
