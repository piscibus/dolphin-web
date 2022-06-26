import Image from "next/image";

type Props = {};

const ProfileMenu = (props: Props) => {
  return (
    <>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item right-bar-toggle me-2">
          <i data-feather="settings" className="icon-lg"/>
        </button>
      </div>
      <div className="dropdown d-inline-block">
        <button
          type="button"
          className="btn header-item bg-soft-light border-start border-end"
          id="page-header-user-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <Image
            width={30}
            height={30}
            className="rounded-circle header-profile-user"
            src="/assets/images/users/avatar-1.jpg"
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-1 fw-medium">
            Shawn L.
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          {/* item*/}
          <a className="dropdown-item" href="apps-contacts-profile.html">
            <i className="mdi mdi-face-profile font-size-16 align-middle me-1"/>{" "}
            Profile
          </a>
          <a className="dropdown-item" href="auth-lock-screen.html">
            <i className="mdi mdi-lock font-size-16 align-middle me-1"/> Lock
            screen
          </a>
          <div className="dropdown-divider"/>
          <a className="dropdown-item" href="auth-logout.html">
            <i className="mdi mdi-logout font-size-16 align-middle me-1"/>{" "}
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
