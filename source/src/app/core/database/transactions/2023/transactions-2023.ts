import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_APRIL } from "./months/4-april";
import { TRANSACTIONS_MAY } from "./months/5-may";
import { TRANSACTIONS_JUNE } from "./months/6-june";


export const TRANSACTIONS_2023: Transaction[] = [
  ...TRANSACTIONS_APRIL,
  ...TRANSACTIONS_MAY,
  ...TRANSACTIONS_JUNE
];
