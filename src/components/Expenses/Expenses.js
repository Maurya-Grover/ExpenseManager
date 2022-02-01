import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
const Expenses = (props) => {
	// parent component(Expenses) controls the value and changes to the value
	// of child component(ExpensesFilter) the management of that is not done
	// by the ExpensesFilter component itself such a component is controlled component
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
			<ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
			<ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
			<ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
		</Card>
	);
};

export default Expenses;
