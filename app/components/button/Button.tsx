import Link from "next/link";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <div>
      <Link href="/">{text}</Link>
    </div>
  );
};

export default Button;
