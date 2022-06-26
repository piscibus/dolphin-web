import * as React from 'react';
import Image from "next/image";

type Props = {};
const NotificationList = (props: Props) => {
  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
      <div className="p-3">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="m-0"> Notifications </h6>
          </div>
          <div className="col-auto">
            <a
              href="#!"
              className="small text-reset text-decoration-underline"
            >
              Unread (3)
            </a>
          </div>
        </div>
      </div>
      <div data-simplebar="" style={{maxHeight: 230}}>
        <a href="#!" className="text-reset notification-item">
          <div className="d-flex">
            <Image
              layout={'fill'}
              src="/assets/images/users/avatar-3.jpg"
              className="me-3 rounded-circle avatar-sm"
              alt="user-pic"
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">James Lemire</h6>
              <div className="font-size-13 text-muted">
                <p className="mb-1">
                  It will seem like simplified English.
                </p>
                <p className="mb-0">
                  <i className="mdi mdi-clock-outline"/>{" "}
                  <span>1 hour ago</span>
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="#!" className="text-reset notification-item">
          <div className="d-flex">
            <div className="avatar-sm me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart"/>
                  </span>
            </div>
            <div className="flex-grow-1">
              <h6 className="mb-1">Your order is placed</h6>
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
        <a href="#!" className="text-reset notification-item">
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
        <a href="#!" className="text-reset notification-item">
          <div className="d-flex">
            <Image
              layout={'fill'}
              src="/assets/images/users/avatar-6.jpg"
              className="me-3 rounded-circle avatar-sm"
              alt="user-pic"
            />
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
      </div>
      <div className="p-2 border-top d-grid">
        <a
          className="btn btn-sm btn-link font-size-14 text-center"
          href="javascript:void(0)"
        >
          <i className="mdi mdi-arrow-right-circle me-1"/>{" "}
          <span>View More..</span>
        </a>
      </div>
    </div>
  );
};

export default NotificationList;
