import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import { produce } from "immer";

export const CATEGORIES = ["Groceries", "Entertainment", "Utilities"];

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      description: "Milk",
      category: "Groceries",
      amount: 8,
    },
    {
      description: "Movie",
      category: "Entertainment",
      amount: 18,
    },
    {
      description: "Internet",
      category: "Utilities",
      amount: 50,
    },
  ]);
  const deleteExpense = (selectedIndex: number) => {
    setExpenses(
      produce((draft) => {
        return draft.filter((item, index) => selectedIndex !== index);
      })
    );
    console.log(expenses);
  };

  const addExpense = (data) => {
    setExpenses([...expenses, data]);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleCategories =
    selectedCategory === ""
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseFilter
        setCategory={(selected) => setSelectedCategory(selected)}
      ></ExpenseFilter>
      <ExpenseList expenses={visibleCategories} deleteExpense={deleteExpense} />
    </>
  );
};

export default App;
