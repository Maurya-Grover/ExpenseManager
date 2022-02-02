import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
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

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpenseList expenses={filteredExpenses} />
		</Card>
	);
};

/* {filteredExpenses.length === 0 ? (
				<p>No Expenses Found</p>
			) : (
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)} */
/*both the ^ and below approaches are fine to use because of lazy 'and' check in javascript.
if first clause fails second clause is not even checked. If first passes, then second 
clause is executed and returned and that can be used to return JSX code.

even better approach though is to pull logic out of the the returned JSX component completely
like done above*/

/* filteredExpenses.length === 0 && <p>No Expenses Found</p>*/
/* {filteredExpenses.length > 0 &&
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))} */
export default Expenses;
