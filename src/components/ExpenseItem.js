import "./ExpenseItem.css";

function ExpenseItem(props) {

    return (
        <div className="expense-item ">
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p>{props.place}</p>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;