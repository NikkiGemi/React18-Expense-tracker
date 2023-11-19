interface Expenses {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
  deleteExpense: (id: number) => void;
}

const ExpenseList = ({ expenses, deleteExpense }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <th scope="row">{expense.description}</th>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteExpense(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan={3} scope="row">
            Total
          </th>
          <td colSpan={3}>
            $
            {expenses.reduce((acc, expense) => {
              return expense.amount + acc;
            }, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
