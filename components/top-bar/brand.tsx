import Logo from "../logo";
import SearchLg from "../search/search-lg";
import BarsButton from "../bars-button";

type Props = {};

const Brand = (props: Props) => {
  return (
    <div className="d-flex">
      <Logo/>
      <BarsButton/>
      <SearchLg/>
    </div>
  );
};

export default Brand;