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
  letterSpacing?: string;
  onClick?: () => void;
}

export const AppText = (props: IAppTextProps) => {
  const { tag: Tag, children, onClick } = props;

  const classNameRef = useMemo(() => {
    const typeMap: Record<string, string> = {
      fixed: "",
    };

    const fontType = props.font ? "sora-font" : "custom-font";
    const textType = typeMap[props.type];
    const colorType = props.color ? `text-${props.color}` : "custom-color";
    const fontWeight = props.fontWeight
      ? `font-${props.fontWeight}`
      : "custom-weight";

    return `${fontType} ${textType} ${colorType} ${fontWeight} ${props.className}`;
  }, []);

  const styles = useMemo(() => {
    return {
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
