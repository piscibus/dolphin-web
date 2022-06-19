import Logo from "./logo";
import BarsButton from "./bars-button";
import AppSearch from "./AppSearch";
import UserMenu from "./user-menu";

const TopBar = () => (
  <header id="page-topbar">
    <div className="navbar-header">
      <div className="d-flex">
        <Logo/>
        <BarsButton/>
        <AppSearch/>
      </div>
      <UserMenu/>
    </div>
  </header>
);

export default TopBar;
