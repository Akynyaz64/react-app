import './ExpenseItem.css'

function ExpenseItem () {
    return (
        <div className="expense-item">
            <div>Pizza Pepperoni</div>
            <div className="expense-item__description">
                <h2>25 min</h2>
                <div className="expense-item__price">25$</div>
            </div>
        </div>
    );
}

export default ExpenseItem;