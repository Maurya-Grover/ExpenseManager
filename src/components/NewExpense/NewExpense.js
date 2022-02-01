import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense ">
			{/* the following passes the saveExpenseDataHandler's
			pointer to the child component using onSaveExpenseData prop
			where it will get executed and value will be passed to the
			function here in NewExpense.js since it's just a pointer
			to the function*/}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
