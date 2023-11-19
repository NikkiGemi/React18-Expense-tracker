import { useState } from "react";
import "./expenseList.css";

interface Props {
  listOfExpenses: string[];
  onDeleteExpense: () => void;
}

const ExpenseList = ({ listOfExpenses, onDeleteExpense }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  let total = 0;

  return (
    <div className="expenseList">
      {listOfExpenses.length > 0 && (
        <select
          className="form-select filterDrop"
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          {listOfExpenses.map((expense) => (
            <option value={expense.category}>{expense.category}</option>
          ))}
        </select>
      )}
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
          {listOfExpenses.map(
            (expense, index) =>
              (selectedCategory === "all" ||
                selectedCategory === expense.category) &&
              ((total = total + expense.amount),
              (
                <tr key={index}>
                  <th scope="row">{expense.description}</th>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => onDeleteExpense(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          )}
          <tr>
            <th colSpan={3} scope="row">
              Total
            </th>
            <td colSpan={3}>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
