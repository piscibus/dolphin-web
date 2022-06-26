import Notifications from "./notifications";
import Search from "./search";
import ProfileMenu from "./profile-menu";

const UserMenu = () => (
  <div className="d-flex">
    <Search/>
    <Notifications/>
    <ProfileMenu/>
  </div>
);

export default UserMenu;
