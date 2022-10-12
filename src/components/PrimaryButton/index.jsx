import "./style.scss";

const PrimaryButton = ({ title, ...props }) => {
  return (
    <div className="primary_btn" {...props}>
      {title}
    </div>
  );
};

export default PrimaryButton;
