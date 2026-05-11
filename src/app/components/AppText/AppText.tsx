import React, { useMemo } from "react";
import "./AppText.css";

interface IAppTextProps {
  tag: React.ElementType;
  font?: string;
  type: string;
  color?: string;
  className?: string;
  fontWeight?: string;
  children: React.ReactNode;
  textAlign?: string;
  lineHeight?: string;
  fontSize?: string;
  letterSpacing?: string;
  onClick?: () => void;
}

export const AppText = (props: IAppTextProps) => {
  const { tag: Tag, children, onClick } = props;

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

    const fontType = props.font ? `${props.font}-font` : "custom-font";
    const textType = typeMap[props.type];
    const colorType = props.color ? `color-${props.color}` : "custom-color";
    const fontWeight = props.fontWeight
      ? `font-${props.fontWeight}`
      : "custom-weight";

    return `${fontType} ${textType} ${colorType} ${fontWeight} ${props.className ?? ""}`;
  }, []);

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
