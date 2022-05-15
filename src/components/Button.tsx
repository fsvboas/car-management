interface Props {
  text?: React.ReactNode;
  radius: string;
  color: string;
  padding: string;
  margin: string;
  onClick?: () => void;
  type?: "submit" | "reset";
  icon?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  text,
  radius,
  color,
  padding,
  margin,
  onClick,
  type = "submit",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: radius,
        padding: padding,
        margin: margin,
      }}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
