import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { StorageExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector : 'page-home',
  templateUrl: 'new-spent.html',
})

export class NewSpent{
  expense : Expense;

  constructor(private storageExpense : StorageExpenseService, public navCtrl : NavController, public toastCtrl : ToastController){
    this.expense = new Expense(null , null, null, new Date());
  }

  addNewExpense(expense : Expense){
    this.storageExpense.saveExpense(expense);
    let toast = this.toastCtrl.create({
      message : "Expense created!",
      duration : 3000
    });
    toast.present();
    this.navCtrl.pop();
  }



}
