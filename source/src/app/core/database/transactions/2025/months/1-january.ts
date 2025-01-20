import { Transaction } from "src/app/models/app.models";
import { UserNames } from "../../../users/users";
import { getUserBy } from "src/app/shared/utils/functions";
import { USER_NOT_FOUND } from "src/app/models/app.constants";

export const TRANSACTIONS_JANUARY_2025: Transaction[] = [
  {
    date: new Date(2025, (1 - 1), 20),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-17.png'
  },
  {
    date: new Date(2025, (1 - 1), 20),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Uiueo)?.id || USER_NOT_FOUND,
    screenshot: 'mamma-8.png'
  },
  {
    date: new Date(2025, (1 - 1), 20),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Nineo)?.id || USER_NOT_FOUND,
    screenshot: 'nonna-8.png'
  },
  {
    date: new Date(2025, (1 - 1), 20),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Babbo)?.id || USER_NOT_FOUND,
    screenshot: 'babbo-8.png'
  }
];