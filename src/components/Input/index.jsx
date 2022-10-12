import "./style.scss";

const Input = ({ label, placeholder }) => {
  return (
    <div>
      <p className="label">{label}</p>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
