import React /* useState*/ from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
	// now this is a stateless/presentational/dumb component
	// state was only added for demo and any component
	// that has state is called a stateful/smart component
	// to manage state for that particular variable
	// const [title, setTitle] = useState(props.title);
	// const clickHandler = () => {
	// 	setTitle('New Value');
	// };
	return (
		<li>
			<Card className="expense-item">
				{/*
					Card is a custom component. CSS class names are supported with HTML elements not custom components.
					Custom components only support what we code them to support.
					therefore to ensure we can set classnames on the custom components and has an effect.
					Hence we want to give classnames to Highest HTML tag within the Card that we want to
					give to Card as well with the props.className approach
				*/}
				<div>
					<ExpenseDate date={props.date} />
				</div>
				<div className="expense-item__description">
					<h2>{props.title}</h2>
				</div>
				<div className="expense-item__price">${props.amount}</div>
				{/*<button onClick={clickHandler}>Change title</button>*/}
			</Card>
		</li>
	);
};

export default ExpenseItem;
