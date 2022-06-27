type Props = {};

const NotificationsFooter = (props: Props) => {
  return (
    <div className="p-2 border-top d-grid">
      <a
        className="btn btn-sm btn-link font-size-14 text-center"
        href="#"
      >
        <i className="mdi mdi-arrow-right-circle me-1"/>{" "}
        <span>View More..</span>
      </a>
    </div>
  );
};

export default NotificationsFooter;
