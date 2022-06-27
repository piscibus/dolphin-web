import Logo from "./logo";
import AppSearch from "./app-search";
import BarsButton from "./bars-button";

type Props = {};

const Brand = (props: Props) => {
  return (
    <div className="d-flex">
      <Logo/>
      <BarsButton/>
      <AppSearch/>
    </div>
  );
};

export default Brand;