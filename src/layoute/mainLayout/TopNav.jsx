import ChangeLanguage from "../../components/ChangeLanguage";
import ChangeTheme from "../../components/ChangeTheme";
import { useAppContext } from "../../context/app/AppContext";

const TopNav = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="d-flex align-items-center ms-auto me-3 gap-3">
        <ChangeLanguage />
        <ChangeTheme />
      </div>
    </nav>
  );
};

export default TopNav;
