class Transaction {
    constructor(itemId, amount, category, date, description) {
        this.itemId = itemId;
        this.amount = Number(amount);
        this.category = category;
        this.date = date;
        this.description = description;
    }

}

export default Transaction;