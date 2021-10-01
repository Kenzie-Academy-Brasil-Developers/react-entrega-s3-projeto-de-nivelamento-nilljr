import Card from "../Card";
import "./style.css";

const Kart = ({ setOrderList, orderList }) => {
  const remove = (code) => {
    setOrderList(orderList.filter((e) => e.code !== code));
  };

  console.log(orderList.length);

  const price = (list) => {
    if (orderList.length > 0) {
      return Math.round(
        orderList.reduce((acc, cur) => acc + cur.price, 0) -
          orderList.reduce((acc, cur) => acc + cur.discount, 0)
      );
    }
  };

  const orderValue = price(orderList);

  return (
    <div className="kart">
      <h2>Pedido</h2>
      {orderList.map((e) => (
        <div>
          <Card product={e} />
          <button onClick={() => remove(e.code)}>Remover do pedido</button>
        </div>
      ))}
      <span>Total do pedido: ${orderValue}</span>
    </div>
  );
};

export default Kart;
