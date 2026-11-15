function OrderStatus({ orderId, status }) {
  return (
    <div>
      <p>Заказ: #{orderId}</p>
      <p>Статус: {status} </p>
    </div>
  );
}
export default OrderStatus;
