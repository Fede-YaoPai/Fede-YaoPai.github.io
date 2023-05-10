import { BORROWERS, TOTAL_OWED } from "src/app/models/app.constants";
import { User } from "src/app/models/app.models";

export enum UserNames {
  Sfeduo = 'sfeduo',
  Babbo = 'babbo',
  Uiueo = 'uiueo',
  Nineo = 'nineo',
  Aletta = 'aletta'
}

export const USERS: User[] = [
  {
    id: '0',
    name: 'Federico',
    lastname: 'Lecca',
    username: UserNames.Sfeduo,
    password: 'Sfeduo1989!',
    sex: 'M',
    isAdmin: true,
    amountLoaned: TOTAL_OWED
  },
  {
    id: '1',
    name: 'Vladimiro',
    lastname: 'Lecca',
    username: UserNames.Babbo,
    password: 'Babbo1954!',
    amountLoaned: TOTAL_OWED / BORROWERS,
    sex: 'M'
  },
  {
    id: '2',
    name: 'Gabriella',
    lastname: 'Tempobono',
    username: UserNames.Uiueo,
    password: 'Uiueo1958!',
    amountLoaned: TOTAL_OWED / BORROWERS,
    sex: 'F'
  },
  {
    id: '3',
    name: 'Alba',
    lastname: 'Vissani',
    username: UserNames.Nineo,
    password: 'Uiueo1958!',
    amountLoaned: TOTAL_OWED / BORROWERS,
    sex: 'F'
  },
  {
    id: '4',
    name: 'Alessandra',
    lastname: 'Lecca',
    username: UserNames.Aletta,
    password: 'Aletta1981!',
    amountLoaned: TOTAL_OWED / BORROWERS,
    sex: 'F'
  }
];
