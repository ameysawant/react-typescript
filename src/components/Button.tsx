import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
};

const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  return (
    <button className={`btn-${variant} btn-${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
