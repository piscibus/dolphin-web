import {Bell} from "react-feather";

const ButtonBell = () => (
  <button
    type="button"
    className="btn header-item noti-icon position-relative"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <Bell size={20}/>
    <span className="badge bg-danger rounded-pill">5</span>
  </button>
);

export default ButtonBell;
