import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetail
                title={props.title}
                place={props.place}
                amount={props.amount}
            />
        </Card>


    );
}

export default ExpenseItem;
