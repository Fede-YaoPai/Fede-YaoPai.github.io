export interface LoggedUser {
  id: string;
  name: string;
  lastname: string;
  username: string;
  amountLoaned?: number;
}

export interface User extends LoggedUser {
  password: string;
}

export interface Transaction {
  date: Date;
  amount: number;
  sender: User | string;
  recipient: User | string;
}
