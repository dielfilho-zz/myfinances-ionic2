import { Injectable } from "@angular/core";
import { Expense } from '../models/expense.model';


@Injectable()

export class StorageExpenseService {
    savedExpenses : Expense[] = [];


    saveExpense(exmp : Expense){
      this.savedExpenses.push(exmp);
    }

    getAllExpenses() : Expense[]{
      return this.savedExpenses;
    }

}
