type Props = {};
const Search = (props: Props) => {
  return (
    <div className="dropdown d-inline-block d-lg-none ms-2">
      <button
        type="button"
        className="btn header-item"
        id="page-header-search-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i data-feather="search" className="icon-lg"/>
      </button>
      <div
        className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
        aria-labelledby="page-header-search-dropdown"
      >
        <form className="p-3">
          <div className="form-group m-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search Result"
              />
              <button className="btn btn-primary" type="submit">
                <i className="mdi mdi-magnify"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
