import IconNotificationItem from "./icon-notification-item";
import AvatarNotificationItem from "./avatar-notification-item";

type Props = {};

const NotificationList = (props: Props) => {
  return (
    <div data-simplebar="" style={{maxHeight: 230}}>
      <IconNotificationItem/>
      <AvatarNotificationItem/>
    </div>
  );
};

export default NotificationList;
