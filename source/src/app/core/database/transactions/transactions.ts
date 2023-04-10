import { USER_NOT_FOUND } from "src/app/models/app.constants";
import { Transaction } from "src/app/models/app.models";
import { getUserBy } from "src/app/shared/utils/functions";

export const TRANSACTIONS: Transaction[] = [
  {
    date: new Date(),
    amount: 100,
    sender: getUserBy('id', '0') || USER_NOT_FOUND,
    recipient: getUserBy('id', '3') || USER_NOT_FOUND
  }
];
