import React, { useMemo } from "react";
import "./AppText.css";

interface IAppTextProps {
  tag: React.ElementType;
  type: string;
  className?: string;
  children: React.ReactNode | string;
  textAlign?: string;
  fontSize?: string;
  onClick?: () => void;
}

export const AppText = (props: IAppTextProps) => {
  const { tag: Tag, type, children, className, onClick } = props;

  const classNameRef = useMemo(() => {
    return `${type} ${className ?? ""}`;
  }, []);

  const styles = useMemo(() => {
    return {
      ...(props?.fontSize && { fontSize: props.fontSize }),
      textAlign: props?.textAlign || "left",
    };
  }, []);

  return (
    <Tag className={classNameRef} style={styles} onClick={onClick}>
      {children}
    </Tag>
  );
};
