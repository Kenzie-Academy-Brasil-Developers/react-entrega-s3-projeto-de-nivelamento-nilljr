import "./style.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <h3>
        {product.code} - {product.name}
      </h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default Card;
