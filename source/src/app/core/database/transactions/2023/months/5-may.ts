import { Transaction } from "src/app/models/app.models";
import { getUserBy } from "src/app/shared/utils/functions";
import { UserNames } from "../../../users/users";
import { USER_NOT_FOUND } from "src/app/models/app.constants";

export const TRANSACTIONS_MAY: Transaction[] = [
  {
    date: new Date(2023, (5 - 1), 12),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Babbo)?.id || USER_NOT_FOUND,
    screenshot: 'babbo-2.png'
  },
  {
    date: new Date(2023, (5 - 1), 12),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Uiueo)?.id || USER_NOT_FOUND,
    screenshot: 'mamma-2.png'
  },
  {
    date: new Date(2023, (5 - 1), 12),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Nineo)?.id || USER_NOT_FOUND,
    screenshot: 'nonna-2.png'
  },
  {
    date: new Date(2023, (5 - 1), 12),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-2.png'
  }
];
