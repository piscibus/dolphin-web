type Props = {};

const Topnav = (props: Props) => {
  return (
    <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="index.html"
                  id="topnav-dashboard"
                  role="button"
                >
                  <i data-feather="home"/>
                  <span data-key="t-dashboards">Dashboard</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-uielement"
                  role="button"
                >
                  <i data-feather="briefcase"/>
                  <span data-key="t-elements">Elements</span>
                  <div className="arrow-down"/>
                </a>
                <div
                  className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                  aria-labelledby="topnav-uielement"
                >
                  <div className="ps-2 p-lg-0">
                    <div className="row">
                      <div className="col-lg-8">
                        <div>
                          <div className="menu-title">Elements</div>
                          <div className="row g-0">
                            <div className="col-lg-5">
                              <div>
                                <a
                                  href="ui-alerts.html"
                                  className="dropdown-item"
                                  data-key="t-alerts"
                                >
                                  Alerts
                                </a>
                                <a
                                  href="ui-buttons.html"
                                  className="dropdown-item"
                                  data-key="t-buttons"
                                >
                                  Buttons
                                </a>
                                <a
                                  href="ui-cards.html"
                                  className="dropdown-item"
                                  data-key="t-cards"
                                >
                                  Cards
                                </a>
                                <a
                                  href="ui-carousel.html"
                                  className="dropdown-item"
                                  data-key="t-carousel"
                                >
                                  Carousel
                                </a>
                                <a
                                  href="ui-dropdowns.html"
                                  className="dropdown-item"
                                  data-key="t-dropdowns"
                                >
                                  Dropdowns
                                </a>
                                <a
                                  href="ui-grid.html"
                                  className="dropdown-item"
                                  data-key="t-grid"
                                >
                                  Grid
                                </a>
                                <a
                                  href="ui-images.html"
                                  className="dropdown-item"
                                  data-key="t-images"
                                >
                                  Images
                                </a>
                                <a
                                  href="ui-modals.html"
                                  className="dropdown-item"
                                  data-key="t-modals"
                                >
                                  Modals
                                </a>
                                <a
                                  href="ui-offcanvas.html"
                                  className="dropdown-item"
                                  data-key="t-offcanvas"
                                >
                                  Offcanvas
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div>
                                <a
                                  href="ui-progressbars.html"
                                  className="dropdown-item"
                                  data-key="t-progress-bars"
                                >
                                  Progress Bars
                                </a>
                                <a
                                  href="ui-placeholders.html"
                                  className="dropdown-item"
                                  data-key="t-progress-bars"
                                >
                                  Placeholders
                                </a>
                                <a
                                  href="ui-tabs-accordions.html"
                                  className="dropdown-item"
                                  data-key="t-tabs-accordions"
                                >
                                  Tabs &amp; Accordions
                                </a>
                                <a
                                  href="ui-typography.html"
                                  className="dropdown-item"
                                  data-key="t-typography"
                                >
                                  Typography
                                </a>
                                <a
                                  href="ui-toasts.html"
                                  className="dropdown-item"
                                  data-key="t-toasts"
                                >
                                  Toasts
                                </a>
                                <a
                                  href="ui-video.html"
                                  className="dropdown-item"
                                  data-key="t-video"
                                >
                                  Video
                                </a>
                                <a
                                  href="ui-general.html"
                                  className="dropdown-item"
                                  data-key="t-general"
                                >
                                  General
                                </a>
                                <a
                                  href="ui-colors.html"
                                  className="dropdown-item"
                                  data-key="t-colors"
                                >
                                  Colors
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div>
                          <div className="menu-title">Extended</div>
                          <div>
                            <a
                              href="extended-lightbox.html"
                              className="dropdown-item"
                              data-key="t-lightbox"
                            >
                              Lightbox
                            </a>
                            <a
                              href="extended-rangeslider.html"
                              className="dropdown-item"
                              data-key="t-range-slider"
                            >
                              Range Slider
                            </a>
                            <a
                              href="extended-sweet-alert.html"
                              className="dropdown-item"
                              data-key="t-sweet-alert"
                            >
                              SweetAlert 2
                            </a>
                            <a
                              href="extended-session-timeout.html"
                              className="dropdown-item"
                              data-key="t-session-timeout"
                            >
                              Session Timeout
                            </a>
                            <a
                              href="extended-rating.html"
                              className="dropdown-item"
                              data-key="t-rating"
                            >
                              Rating
                            </a>
                            <a
                              href="extended-notifications.html"
                              className="dropdown-item"
                              data-key="t-notifications"
                            >
                              Notifications
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-pages"
                  role="button"
                >
                  <i data-feather="grid"/>
                  <span data-key="t-apps">Apps</span>
                  <div className="arrow-down"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages">
                  <a
                    href="apps-calendar.html"
                    className="dropdown-item"
                    data-key="t-calendar"
                  >
                    Calendar
                  </a>
                  <a
                    href="apps-chat.html"
                    className="dropdown-item"
                    data-key="t-chat"
                  >
                    Chat
                  </a>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-email"
                      role="button"
                    >
                      <span data-key="t-email">Email</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-email">
                      <a
                        href="apps-email-inbox.html"
                        className="dropdown-item"
                        data-key="t-inbox"
                      >
                        Inbox
                      </a>
                      <a
                        href="apps-email-read.html"
                        className="dropdown-item"
                        data-key="t-read-email"
                      >
                        Read Email
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-invoice"
                      role="button"
                    >
                      <span data-key="t-invoices">Invoices</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-invoice">
                      <a
                        href="apps-invoices-list.html"
                        className="dropdown-item"
                        data-key="t-invoice-list"
                      >
                        Invoice List
                      </a>
                      <a
                        href="apps-invoices-detail.html"
                        className="dropdown-item"
                        data-key="t-invoice-detail"
                      >
                        Invoice Detail
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-contact"
                      role="button"
                    >
                      <span data-key="t-contacts">Contacts</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-contact">
                      <a
                        href="apps-contacts-grid.html"
                        className="dropdown-item"
                        data-key="t-user-grid"
                      >
                        User Grid
                      </a>
                      <a
                        href="apps-contacts-list.html"
                        className="dropdown-item"
                        data-key="t-user-list"
                      >
                        User List
                      </a>
                      <a
                        href="apps-contacts-profile.html"
                        className="dropdown-item"
                        data-key="t-profile"
                      >
                        Profile
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-components"
                  role="button"
                >
                  <i data-feather="box"/>
                  <span data-key="t-components">Components</span>{" "}
                  <div className="arrow-down"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-components">
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-form"
                      role="button"
                    >
                      <span data-key="t-forms">Forms</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-form">
                      <a
                        href="form-elements.html"
                        className="dropdown-item"
                        data-key="t-form-elements"
                      >
                        Basic Elements
                      </a>
                      <a
                        href="form-validation.html"
                        className="dropdown-item"
                        data-key="t-form-validation"
                      >
                        Validation
                      </a>
                      <a
                        href="form-advanced.html"
                        className="dropdown-item"
                        data-key="t-form-advanced"
                      >
                        Advanced Plugins
                      </a>
                      <a
                        href="form-editors.html"
                        className="dropdown-item"
                        data-key="t-form-editors"
                      >
                        Editors
                      </a>
                      <a
                        href="form-uploads.html"
                        className="dropdown-item"
                        data-key="t-form-upload"
                      >
                        File Upload
                      </a>
                      <a
                        href="form-wizard.html"
                        className="dropdown-item"
                        data-key="t-form-wizard"
                      >
                        Wizard
                      </a>
                      <a
                        href="form-mask.html"
                        className="dropdown-item"
                        data-key="t-form-mask"
                      >
                        Mask
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-table"
                      role="button"
                    >
                      <span data-key="t-tables">Tables</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-table">
                      <a
                        href="tables-basic.html"
                        className="dropdown-item"
                        data-key="t-basic-tables"
                      >
                        Bootstrap Basic
                      </a>
                      <a
                        href="tables-datatable.html"
                        className="dropdown-item"
                        data-key="t-data-tables"
                      >
                        Data Tables
                      </a>
                      <a
                        href="tables-responsive.html"
                        className="dropdown-item"
                        data-key="t-responsive-table"
                      >
                        Responsive
                      </a>
                      <a
                        href="tables-editable.html"
                        className="dropdown-item"
                        data-key="t-editable-table"
                      >
                        Editable
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-charts"
                      role="button"
                    >
                      <span data-key="t-charts">Charts</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-charts">
                      <a
                        href="charts-apex.html"
                        className="dropdown-item"
                        data-key="t-apex-charts"
                      >
                        Apex charts
                      </a>
                      <a
                        href="charts-echart.html"
                        className="dropdown-item"
                        data-key="t-e-charts"
                      >
                        E charts
                      </a>
                      <a
                        href="charts-chartjs.html"
                        className="dropdown-item"
                        data-key="t-chartjs-charts"
                      >
                        Chartjs
                      </a>
                      <a
                        href="charts-knob.html"
                        className="dropdown-item"
                        data-key="t-knob-charts"
                      >
                        Jquery Knob
                      </a>
                      <a
                        href="charts-sparkline.html"
                        className="dropdown-item"
                        data-key="t-sparkline-charts"
                      >
                        Sparkline
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-icons"
                      role="button"
                    >
                      <span data-key="t-icons">Icons</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-icons">
                      <a
                        href="icons-boxicons.html"
                        className="dropdown-item"
                        data-key="t-boxicons"
                      >
                        Boxicons
                      </a>
                      <a
                        href="icons-materialdesign.html"
                        className="dropdown-item"
                        data-key="t-material-design"
                      >
                        Material Design
                      </a>
                      <a
                        href="icons-dripicons.html"
                        className="dropdown-item"
                        data-key="t-dripicons"
                      >
                        Dripicons
                      </a>
                      <a
                        href="icons-fontawesome.html"
                        className="dropdown-item"
                        data-key="t-font-awesome"
                      >
                        Font Awesome 5
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-map"
                      role="button"
                    >
                      <span data-key="t-maps">Maps</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-map">
                      <a
                        href="maps-google.html"
                        className="dropdown-item"
                        data-key="t-g-maps"
                      >
                        Google
                      </a>
                      <a
                        href="maps-vector.html"
                        className="dropdown-item"
                        data-key="t-v-maps"
                      >
                        Vector
                      </a>
                      <a
                        href="maps-leaflet.html"
                        className="dropdown-item"
                        data-key="t-l-maps"
                      >
                        Leaflet
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-more"
                  role="button"
                >
                  <i data-feather="file-text"/>
                  <span data-key="t-extra-pages">Extra Pages</span>{" "}
                  <div className="arrow-down"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more">
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-auth"
                      role="button"
                    >
                      <span data-key="t-authentication">Authentication</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-auth">
                      <a
                        href="auth-login.html"
                        className="dropdown-item"
                        data-key="t-login"
                      >
                        Login
                      </a>
                      <a
                        href="auth-register.html"
                        className="dropdown-item"
                        data-key="t-register"
                      >
                        Register
                      </a>
                      <a
                        href="auth-recoverpw.html"
                        className="dropdown-item"
                        data-key="t-recover-password"
                      >
                        Recover Password
                      </a>
                      <a
                        href="auth-lock-screen.html"
                        className="dropdown-item"
                        data-key="t-lock-screen"
                      >
                        Lock Screen
                      </a>
                      <a
                        href="auth-logout.html"
                        className="dropdown-item"
                        data-key="t-logout"
                      >
                        Log Out
                      </a>
                      <a
                        href="auth-confirm-mail.html"
                        className="dropdown-item"
                        data-key="t-confirm-mail"
                      >
                        Confirm Mail
                      </a>
                      <a
                        href="auth-email-verification.html"
                        className="dropdown-item"
                        data-key="t-email-verification"
                      >
                        Email verification
                      </a>
                      <a
                        href="auth-two-step-verification.html"
                        className="dropdown-item"
                        data-key="t-two-step-verification"
                      >
                        Two step verification
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-utility"
                      role="button"
                    >
                      <span data-key="t-utility">Utility</span>{" "}
                      <div className="arrow-down"/>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-utility">
                      <a
                        href="pages-starter.html"
                        className="dropdown-item"
                        data-key="t-starter-page"
                      >
                        Starter Page
                      </a>
                      <a
                        href="pages-maintenance.html"
                        className="dropdown-item"
                        data-key="t-maintenance"
                      >
                        Maintenance
                      </a>
                      <a
                        href="pages-comingsoon.html"
                        className="dropdown-item"
                        data-key="t-coming-soon"
                      >
                        Coming Soon
                      </a>
                      <a
                        href="pages-timeline.html"
                        className="dropdown-item"
                        data-key="t-timeline"
                      >
                        Timeline
                      </a>
                      <a
                        href="pages-faqs.html"
                        className="dropdown-item"
                        data-key="t-faqs"
                      >
                        FAQs
                      </a>
                      <a
                        href="pages-pricing.html"
                        className="dropdown-item"
                        data-key="t-pricing"
                      >
                        Pricing
                      </a>
                      <a
                        href="pages-404.html"
                        className="dropdown-item"
                        data-key="t-error-404"
                      >
                        Error 404
                      </a>
                      <a
                        href="pages-500.html"
                        className="dropdown-item"
                        data-key="t-error-500"
                      >
                        Error 500
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle arrow-none"
                  href="layouts-horizontal.html"
                  role="button"
                >
                  <i data-feather="layout"/>
                  <span data-key="t-horizontal">Horizontal</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  );
};

export default Topnav;
