import * as React from 'react';
import {Dropdown} from "react-bootstrap";
import ButtonBell from "./ButtonBell";
import NotificationList from "./NotificationList";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <Dropdown className="d-inline-block">
      <ButtonBell/>
      <NotificationList/>
    </Dropdown>
  );
};

export default Notifications;
