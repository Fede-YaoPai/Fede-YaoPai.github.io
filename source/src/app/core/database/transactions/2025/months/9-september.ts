import { USER_NOT_FOUND } from "src/app/models/app.constants";
import { Transaction } from "src/app/models/app.models";
import { getUserBy } from "src/app/shared/utils/functions";
import { UserNames } from "../../../users/users";


export const TRANSACTIONS_SEPTEMBER_2025: Transaction[] = [
    {
    date: new Date(2025, (10 - 1), 10),
    amount: 104,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Aletta)?.id || USER_NOT_FOUND,
    screenshot: 'ale-22.png'
  },
  {
    date: new Date(2025, (10 - 1), 10),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Uiueo)?.id || USER_NOT_FOUND,
    screenshot: 'mamma-13.png'
  },
  {
    date: new Date(2025, (10 - 1), 10),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Nineo)?.id || USER_NOT_FOUND,
    screenshot: 'nonna-13.png'
  },
  {
    date: new Date(2025, (10 - 1), 10),
    amount: 69,
    sender: getUserBy('username', UserNames.Sfeduo)?.id || USER_NOT_FOUND,
    recipient: getUserBy('username', UserNames.Babbo)?.id || USER_NOT_FOUND,
    screenshot: 'babbo-13.png'
  }
];