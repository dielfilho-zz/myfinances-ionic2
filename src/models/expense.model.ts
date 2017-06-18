export class Expense{

    constructor(
        public value : number,
        public description : string,
        public type : string,
        public date : Date,
        public categories : string[] = ["FastFood", "Debt", "House", "Market"]
    ){}

}
