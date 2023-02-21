function ExpenseDate(props) {
    const expenseMonth = props.date.toLocaleString("en-US", { month: "long" })
    const expenseYear = props.date.getFullYear()
    const expenseDate = props.date.toLocaleString("en-US", { day: "2-digit" })
    return (
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDate}</div>
      </div>
    );
}

export default ExpenseDate