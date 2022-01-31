import './Card.css';

function Card(props) {
	const classes = 'card ' + props.className;
	// value of this props.children will always be the content that exists between the opening and closing
	// tag of this custom component itself, wherever it is used.
	return <div className={classes}>{props.children}</div>;
}

export default Card;
