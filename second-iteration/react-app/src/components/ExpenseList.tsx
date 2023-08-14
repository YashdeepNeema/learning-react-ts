interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ListExpense = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>
            $
            {expenses
              .reduce((sum, expense) => sum + expense.amount, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ListExpense;

/**
 * App code 
 * 
 * 


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

 */
