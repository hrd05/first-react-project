import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    place={expense.locationOfExpenditure}
                ></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;
