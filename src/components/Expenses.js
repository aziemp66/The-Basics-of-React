import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.data.map((expense) => {
                return (
                    <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                );
            })}
        </div>
    );
}

export default Expenses;
