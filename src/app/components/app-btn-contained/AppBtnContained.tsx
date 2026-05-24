// CSS
import "./AppBtnContained.css";

interface IAppBtnContainedProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const AppBtnContained = (props: IAppBtnContainedProps) => {
  const { children, onClick } = props;

  return (
    <button className="btn-contained" onClick={onClick}>
      {children}
    </button>
  );
};
