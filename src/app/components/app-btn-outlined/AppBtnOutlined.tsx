// CSS
import { AppText } from "@app/components/app-text/AppText";
import "./AppBtnOutlined.css";

interface IAppBtnOutlinedProps {
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const AppBtnOutlined = (props: IAppBtnOutlinedProps) => {
  const { text, icon, onClick } = props;

  return (
    <button
      className={`btn-outlined ${!text ? "btn-outlined--icon-only" : "btn-outlined--text-icon"}`}
      onClick={onClick}
    >
      {icon && icon}
      {text && <AppText tag="span" type={"btn-text"} children={text} />}
    </button>
  );
};
