import Image from "next/image";

type Props = {};

const AvatarNotificationItem = (props: Props) => {
  return (
    <a href="#" className="text-reset notification-item">
      <div className="d-flex">
        <div className="flex-shrink-0 me-3">
              <span className="rounded-circle avatar-sm">
                <Image
                  width={32}
                  height={32}
                  src="/assets/images/users/avatar-6.jpg"
                  className="rounded-circle avatar-sm"
                  alt="user-pic"
                />
              </span>
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">Salena Layfield</h6>
          <div className="font-size-13 text-muted">
            <p className="mb-1">
              As a skeptical Cambridge friend of mine occidental.
            </p>
            <p className="mb-0">
              <i className="mdi mdi-clock-outline"/>{" "}
              <span>1 hours ago</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AvatarNotificationItem;
