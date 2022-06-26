import Logo from "./logo";
import AppSearch from "./app-search";

type Props = {};

const Brand = (props: Props) => {
  return (
    <div className="d-flex">
      <Logo/>
      <AppSearch/>
    </div>
  );
};

export default Brand;