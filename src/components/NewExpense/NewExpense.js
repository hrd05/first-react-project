import { React, useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const [isEditing, setEditing] = useState(false);

    const startEditHandler = () => {
        setEditing(true);
    }

    const stopEditHandler = () => {
        setEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}

            {isEditing && <ExpenseForm onCancel={stopEditHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;