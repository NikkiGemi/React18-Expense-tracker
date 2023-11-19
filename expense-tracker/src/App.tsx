import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { produce } from "immer";

const App = () => {
  const [listOfExpenses, setListOfExpenses] = useState([
    {
      description: "Milk",
      category: "groceries",
      amount: 8,
    },
    {
      description: "Movie",
      category: "entertainment",
      amount: 18,
    },
    {
      description: "Internet",
      category: "utilities",
      amount: 50,
    },
  ]);
  const [total, setTotal] = useState(0);

  const deleteExpense = (selectedIndex) => {
    setListOfExpenses(
      produce((draft) => {
        return draft.filter((item, index) => selectedIndex !== index);
      })
    );
    console.log(listOfExpenses);
  };

  const addExpense = (data) => {
    setListOfExpenses([...listOfExpenses, data]);
  };
  return (
    <>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList
        listOfExpenses={listOfExpenses}
        onDeleteExpense={deleteExpense}
      />
    </>
  );
};

export default App;
