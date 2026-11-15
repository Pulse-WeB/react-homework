import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";
import "./App.css";

function App() {
  const products = ["Banana", "Apple", "Pineapple", "Kiwi"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "доставлен" },
    { orderId: 125, status: "обработан" },
  ];
  return (
    <>
      <Greeting name="Vladyslav" />
      <ShoppingList items={products} />
      <div className="order-wrapper">
        {orders.map((order) => {
          return (
            <OrderStatus
              key={order.orderId}
              orderId={order.orderId}
              status={order.status}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
