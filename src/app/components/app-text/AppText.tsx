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
  id?: string;
}

export const AppText = (props: IAppTextProps) => {
  const { tag: Tag, id, type, children, className, onClick } = props;

  const classNameRef = useMemo(() => {
    return `${type} ${className ?? ""}`;
  }, [type]);

  const styles = useMemo(() => {
    return {
      ...(props?.fontSize && { fontSize: props.fontSize }),
      textAlign: props?.textAlign || "left",
    };
  }, []);

  return (
    <Tag id={id} className={classNameRef} style={styles} onClick={onClick}>
      {children}
    </Tag>
  );
};
