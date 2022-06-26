import * as React from "react";

type Props = {};
const IconNotificationItem = (props: Props) => {
  return (
    <a href="#" className="text-reset notification-item">
      <div className="d-flex">
        <div className="avatar-sm me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check"/>
                  </span>
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Your item is shipped</h6>
          <div className="font-size-13 text-muted">
            <p className="mb-1">
              If several languages coalesce the grammar
            </p>
            <p className="mb-0">
              <i className="mdi mdi-clock-outline"/>{" "}
              <span>3 min ago</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default IconNotificationItem;
