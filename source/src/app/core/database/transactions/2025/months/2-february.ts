import { Transaction } from "src/app/models/app.models";
import { UserNames } from "../../../users/users";
import { getUserBy } from "src/app/shared/utils/functions";
import { USER_NOT_FOUND } from "src/app/models/app.constants";

export const TRANSACTIONS_FEBRUARY_2025: Transaction[] = [
  {
    date: new Date(2025, (2 - 1), 25),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-18.png'
  },
  {
    date: new Date(2025, (2 - 1), 25),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Uiueo)?.id || USER_NOT_FOUND,
    screenshot: 'mamma-9.png'
  },
  {
    date: new Date(2025, (2 - 1), 25),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Nineo)?.id || USER_NOT_FOUND,
    screenshot: 'nonna-9.png'
  },
  {
    date: new Date(2025, (2 - 1), 25),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Babbo)?.id || USER_NOT_FOUND,
    screenshot: 'babbo-9.png'
  }
];