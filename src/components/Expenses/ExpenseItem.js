import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [amount, setTitle] = useState(props.amount);
    const clickHandler = () => {
        setTitle(100);
        // console.log(title);
    };



    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetail
                title={props.title}
                place={props.place}
                amount={amount}
            />
            <button onClick={clickHandler}>Change expense</button>
            {/* <button onClick={deleteHandler} id={props.id}>Delete</button> */}
        </Card>



    );
}

export default ExpenseItem;
