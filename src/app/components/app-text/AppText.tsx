import React, { useMemo } from "react";
import "./AppText.css";

interface IAppTextProps {
  tag: React.ElementType;
  font?: string;
  type: string;
  color?: string;
  className?: string;
  fontWeight?: string;
  children: React.ReactNode | string;
  textAlign?: string;
  lineHeight?: string;
  fontSize?: string;
  letterSpacing?: string;
  onClick?: () => void;
}

export const AppText = (props: IAppTextProps) => {
  const {
    tag: Tag,
    font,
    type,
    color,
    children,
    className,
    fontWeight,
    onClick,
  } = props;

  const classNameRef = useMemo(() => {
    const typeMap: Record<string, string> = {
      fixed: "",
      display: "text-display",
      "title-xl": "text-title-xl",
      "title-l": "text-title-l",
      "title-s": "text-title-s",
      "body-xl": "text-body-xl",
      "body-l": "text-body-l",
      "body-m": "text-body-m",
      "body-s": "text-body-s",
      "body-xs": "text-body-xs",
    };

    const fontType = font ? `${font}-font` : "custom-font";
    const textType = typeMap[type];
    const colorType = color ? `color-${color}` : "custom-color";
    const fontWeightAux = fontWeight ? `font-${fontWeight}` : "custom-weight";

    return `${fontType} ${textType} ${colorType} ${fontWeightAux} ${className ?? ""}`;
  }, [color]);

  const styles = useMemo(() => {
    return {
      ...(props?.fontSize && { fontSize: props.fontSize }),
      textAlign: props?.textAlign || "left",
      lineHeight: props?.lineHeight || "normal",
      letterSpacing: props?.letterSpacing || "normal",
    };
  }, []);

  return (
    <Tag className={classNameRef} style={styles} onClick={onClick}>
      {children}
    </Tag>
  );
};
