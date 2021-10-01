import { useState } from "react";
import "./style.css";

const Form = ({ products, handleClick }) => {
  const [product, setProduct] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
    discount: "",
  });

  return (
    <div className="form">
      <h2>Cadastro de produto</h2>
      <input
        type="number"
        value={product.code}
        placeholder="Código do produto"
        onChange={(event) =>
          setProduct({ ...product, code: parseInt(event.target.value) })
        }
      />
      <input
        type="text"
        value={product.name}
        placeholder="Nome do produto"
        onChange={(event) =>
          setProduct({ ...product, name: event.target.value })
        }
      />
      <input
        type="text"
        value={product.description}
        placeholder="Descrição do produto"
        onChange={(event) =>
          setProduct({ ...product, description: event.target.value })
        }
      />
      <input
        type="number"
        value={product.price}
        placeholder="Preço do produto"
        onChange={(event) =>
          setProduct({ ...product, price: parseFloat(event.target.value) })
        }
      />
      <input
        type="number"
        value={product.discount}
        placeholder="Desconto a ser aplicado"
        onChange={(event) =>
          setProduct({ ...product, discount: parseFloat(event.target.value) })
        }
      />
      <button onClick={() => handleClick(product)}>Cadastrar</button>
    </div>
  );
};

export default Form;
