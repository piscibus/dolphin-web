import * as React from "react";

type Props = {};

const NotificationsHeader = (props: Props) => {
  return (
    <div className="p-3">
      <div className="row align-items-center">
        <div className="col">
          <h6 className="m-0"> Notifications </h6>
        </div>
        <div className="col-auto">
          <a href="#" className="small text-reset text-decoration-underline">
            Unread (3)
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationsHeader;
