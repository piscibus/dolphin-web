import * as React from 'react';
import NotificationsHeader from "./notifications-header";
import NotificationsFooter from "./notifications-footer";
import NotificationList from "./notification-list";

type Props = {};
const NotificationMenu = (props: Props) => {
  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
      <NotificationsHeader/>
      <NotificationList/>
      <NotificationsFooter/>
    </div>
  );
};

export default NotificationMenu;
