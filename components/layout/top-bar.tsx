import UserMenu from "./user-menu";
import Brand from "./brand";

const TopBar = () => (
  <header id="page-topbar">
    <div className="navbar-header">
      <Brand/>
      <UserMenu/>
    </div>
  </header>
);

export default TopBar;
