import * as React from 'react';
import ButtonBell from "./button-bell";
import NotificationMenu from "./notification-menu";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div className="dropdown d-inline-block">
      <ButtonBell/>
      <NotificationMenu/>
    </div>
  );
};

export default Notifications;
