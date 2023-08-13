interface Props {
  items: string[];
  onClear: () => void;
  onDelete: (elem: string) => void;
}

const Cart = ({ items, onClear, onDelete }: Props) => {
  return (
    <>
      <h1>Product list</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span>
              {item} <button onClick={() => onDelete(item)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </>
  );
};
export default Cart;

/**
 * 
 * App Code
 * 
 import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const items = ["product-01", "product-02", "product-03", "product-04"];
  const [cartItems, setCartItems] = useState(items);

  const handleDelete = (elem: string) => {
    setCartItems(cartItems.filter((item) => item !== elem));
  };
  return (
    <>
      <NavBar itemsCount={cartItems.length} />
      <Cart
        items={cartItems}
        onClear={() => setCartItems([])}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;

  
 */
