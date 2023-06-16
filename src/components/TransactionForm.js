import React, { useState, useEffect } from 'react';
import Transaction from '../models/transaction';
import { Link } from 'react-router-dom';

const TransactionForm = () => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState(new Transaction('', '', '', '', ''));

  useEffect(() => { //this is for loading transactions
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) {
        setTransactions(savedTransactions);
    }
    }, []);

    useEffect(() => { //this is for saving transactions
       savedTransactions(transactions);
    }, [transactions]);

  const change = (e) => { //update transaction state based on user input
    const { name, value } = e.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submit = (e) => { //This manages the form submission event triggered by the user
    e.preventDefault();
    const newTransaction = { ...transaction };
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setTransaction(new Transaction('', '', '', '', ''));
  };

  const savedTransactions = (transactions) => { //this is for saving transactions
    localStorage.setItem('transactions', JSON.stringify(transactions));
    };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Item ID:
          <input
            type="text"
            name="itemId"
            value={transaction.itemId}
            onChange={change}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={transaction.amount}
            onChange={change}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={transaction.category}
            onChange={change}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={transaction.date}
            onChange={change}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={transaction.description}
            onChange={change}
          />
        </label>
        <button type="submit" onClick={() => savedTransactions(transactions)}>Add Transaction</button>
      </form>

      <div>
        <h2>Transactions:</h2>
        {transactions.length === 0 ? (
          <p>No Transactions</p>
        ) : (
          <ul>
            {transactions.map((trans, index) => (
              <li key={index}>
                Item ID: {trans.itemId}, Amount: {trans.amount}, Category: {trans.category}, Date: {trans.date}, Description: {trans.description}
              </li>
            ))}
          </ul>
        )}
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default TransactionForm;
