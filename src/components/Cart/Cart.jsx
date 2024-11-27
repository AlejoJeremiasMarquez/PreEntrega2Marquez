import { Link } from "react-router-dom";


function Cart() {
  return (
    <div>
      <ul>
        <li>producto 1</li>
        <li>producto 2</li>
        <li>producto 3</li>
        <li>producto 4</li>
      </ul>
      <Link to='/checkout'>
        <button>Comprar</button>
      </Link>
    </div>
  );
}

export default Cart
