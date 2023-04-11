export interface LoggedUser {
  id: string;
  name: string;
  lastname: string;
  username: string;
  amountLoaned?: number;
  sex: 'M' | 'F'
}

export interface User extends LoggedUser {
  password: string;
}

export interface Transaction {
  date: Date;
  amount: number;
  sender: string;
  recipient: string;
  screenshot: string;
}
