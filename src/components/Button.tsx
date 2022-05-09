interface Props {
  text?: React.ReactNode;
  radius: string;
  color: string;
  padding: string;
  margin: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  text,
  radius,
  color,
  padding,
  margin,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: radius,
        padding: padding,
        margin: margin,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
