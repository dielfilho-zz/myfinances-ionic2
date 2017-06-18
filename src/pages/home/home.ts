import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StorageExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { NewSpent } from '../new-spent/new-spent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{

  expenses : Expense[] = [];

  constructor(public navCtrl: NavController, private storageExpense : StorageExpenseService) {
  }

  ionViewWillEnter(){
    this.expenses = this.storageExpense.getAllExpenses();
  }

  goToNewsSpent(){
    this.navCtrl.push(NewSpent);
  }

}
