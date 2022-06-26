import type {NextPage} from 'next';
import HeadTag from "../components/layout/horizontal/head-tag";
import Scripts from "../components/layout/horizontal/scripts";
import TopBar from "../components/layout/top-bar";
import Topnav from "../components/layout/topnav";

const Home: NextPage = () => (
  <div>
    <HeadTag/>
    <div id="layout-wrapper">
      <TopBar/>
      <Topnav/>
    </div>
    <Scripts/>
  </div>
);

export default Home;
