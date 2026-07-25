// CSS
import { AppText } from "../app-text/AppText";
import "./AppBtnContained.css";

interface IAppBtnContainedProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const AppBtnContained = (props: IAppBtnContainedProps) => {
  const { text, icon, onClick } = props;

  return (
    <button className="btn-contained" onClick={onClick}>
      <AppText tag="span" type={"btn-text"} children={text} />
      {icon && icon}
    </button>
  );
};
