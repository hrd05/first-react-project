import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
    return (
        <div className="expense-item ">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p>{props.place}</p>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
