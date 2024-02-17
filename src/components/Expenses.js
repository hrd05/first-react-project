import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
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
