import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ListExpense from "./components/ExpenseList";
import ExpenxeForm from "./components/ExpenxeForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaa", amount: 10, category: "Groceries" },
    { id: 2, description: "baaa", amount: 10, category: "Entertainment" },
    { id: 3, description: "caaa", amount: 10, category: "Groceries" },
    { id: 4, description: "daaa", amount: 10, category: "Utilities" },
    { id: 5, description: "faaa", amount: 10, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => id !== expense.id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenxeForm
        onSubmit={(exp) =>
          setExpenses([...expenses, { ...exp, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelectCategory={(cat) => handleSelectCategory(cat)} />
      <ListExpense expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
}

export default App;
