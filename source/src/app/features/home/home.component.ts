import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from 'src/app/core/database/transactions/transactions';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LoggedUser, Transaction, User } from 'src/app/models/app.models';
import { getUserBy } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loggedUser: LoggedUser | undefined;
  public transactions: Transaction[] = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();

    if (this.loggedUser) {
      this.transactions = this.loggedUser.isAdmin ? TRANSACTIONS : TRANSACTIONS.filter((t: Transaction) => t.recipient === this.loggedUser?.id);
    }
  }

  public getTotalReimbursed(percent: boolean = false): number {
    const totalReimbursed: number = this.transactions
      .map((t: Transaction) => t.amount)
      .reduce((total: number, current: number) => total += current)
    ;

    const getRoundedPercent = (total: number, partial: number) => Math.trunc((partial / total) * 100);

    return percent ? getRoundedPercent(this.loggedUser?.amountLoaned!, totalReimbursed) : totalReimbursed;
  }

  public getTransactionRecipient(recipientId: string): User | undefined {
    return getUserBy('id', recipientId);
  }

}
