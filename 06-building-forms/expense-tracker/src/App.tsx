import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 17, category: "Utilities" },
    { id: 2, description: "kkk", amount: 13, category: "Groceries" },
    { id: 3, description: "jjj", amount: 20, category: "Entertainment" },
    { id: 4, description: "fff", amount: 10, category: "Groceries" },
    { id: 5, description: "ddd", amount: 7, category: "Entertainment" },
    { id: 6, description: "sss", amount: 8, category: "Utilities" },
  ]);
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <Form
          onSubmit={(newExp) =>
            setExpenses([...expenses, { ...newExp, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
