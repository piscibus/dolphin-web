import Notifications from "./notifications";
import SearchSm from "../../search/search-sm";
import ProfileMenu from "./profile-menu";

const UserMenu = () => (
  <div className="d-flex">
    <SearchSm/>
    <Notifications/>
    <ProfileMenu/>
  </div>
);

export default UserMenu;
