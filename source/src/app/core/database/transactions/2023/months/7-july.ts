import { Transaction } from "src/app/models/app.models";
import { getUserBy } from "src/app/shared/utils/functions";
import { UserNames } from "../../../users/users";
import { USER_NOT_FOUND } from "src/app/models/app.constants";

// This month I only paid Ale
export const TRANSACTIONS_JULY_2023: Transaction[] = [
  {
    date: new Date(2023, (7 - 1), 16),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-4.png'
  }
];
