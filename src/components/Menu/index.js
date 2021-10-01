import Card from "../Card";
import "./style.css";

const Menu = ({ setOrderList, orderList, products }) => {
  const addToOrder = (code) => {
    setOrderList([...orderList, products.find((e) => e.code === code)]);
  };

  return (
    <div className="menu">
      <h2>Produtos</h2>
      {products.map((e) => (
        <div>
          <Card product={e} />
          <button onClick={() => addToOrder(e.code)}>
            Adicionar ao pedido
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
