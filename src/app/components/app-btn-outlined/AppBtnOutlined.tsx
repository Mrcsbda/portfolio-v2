// CSS
import "./AppBtnOutlined.css";

interface IAppBtnOutlinedProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const AppBtnOutlined = (props: IAppBtnOutlinedProps) => {
  const { children, onClick } = props;

  return (
    <button className="btn-outlined" onClick={onClick}>
      {children}
    </button>
  );
};
