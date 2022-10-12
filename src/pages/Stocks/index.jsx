import { useNavigate } from "react-router-dom";

const Stocks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>go back</button>
      <p>Page 11222211</p>
    </div>
  );
};

export default Stocks;
