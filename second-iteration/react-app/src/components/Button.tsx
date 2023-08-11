interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  handleClick: () => void;
}

const Button = ({ children, color = "primary", handleClick }: Props) => {
  return (
    <button onClick={handleClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
