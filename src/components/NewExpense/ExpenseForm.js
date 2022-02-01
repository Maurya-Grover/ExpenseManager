import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	// single state approach commented out.
	// Usually multiple state approach is more prevalent
	// but both approaches are completely fine and can be used
	// const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({ ...userInput, title: event.target.value });
		// in 1 state approach updating like this ^ is not a good practice
		// because you're dependent on previous state
		// React schedules updates and doesn't execute instantly
		// so if multiple updates are requested at the same time
		// you could be dependent on a previous outdated state
		// if you don't explicitly use previous state
		// Therefore: instead you pass an anonymous function to the setBlahBlah method
		// which gives access to previous state and return to it the updated values

		// setUserInput((prevState) => {
		// 	return { ...prevState, title: event.target.value };
		// });
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({ ...userInput, date: event.target.value });
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({ ...userInput, amount: event.target.value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
