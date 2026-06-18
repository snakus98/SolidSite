import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={`w-full max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-9 ${className}`}
    >
      {children}
    </Tag>
  );
}
