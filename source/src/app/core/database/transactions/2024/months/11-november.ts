import { Transaction } from "src/app/models/app.models";
import { UserNames } from "../../../users/users";
import { getUserBy } from "src/app/shared/utils/functions";
import { USER_NOT_FOUND } from "src/app/models/app.constants";

export const TRANSACTIONS_NOVEMBER_2024: Transaction[] = [
  {
    date: new Date(2024, (11 - 1), 13),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-16.png'
  },
  {
    date: new Date(2024, (11 - 1), 13),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Uiueo)?.id || USER_NOT_FOUND,
    screenshot: 'mamma-7.png'
  },
  {
    date: new Date(2024, (11 - 1), 13),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Nineo)?.id || USER_NOT_FOUND,
    screenshot: 'nonna-7.png'
  },
  {
    date: new Date(2024, (11 - 1), 13),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Babbo)?.id || USER_NOT_FOUND,
    screenshot: 'babbo-7.png'
  }
];