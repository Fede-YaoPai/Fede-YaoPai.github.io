import { Transaction } from "src/app/models/app.models";
import { TRANSACTIONS_2023 } from "./2023/transactions-2023";
import { TRANSACTIONS_2024 } from "./2024/transactions-2024";
import { TRANSACTIONS_2025 } from "./2025/transactions-2025";


export const TRANSACTIONS: Transaction[] = [
  ...TRANSACTIONS_2023,
  ...TRANSACTIONS_2024,
  ...TRANSACTIONS_2025
];

