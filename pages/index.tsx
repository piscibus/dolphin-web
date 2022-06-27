import type {NextPage} from 'next';
import HeadTag from "../components/layout/head-tag";
import Scripts from "../components/layout/scripts";
import TopBar from "../components/top-bar";
import Topnav from "../components/topnav";

const Home: NextPage = () => (
  <>
    <HeadTag/>
    <div id="layout-wrapper">
      <TopBar/>
      <Topnav/>
    </div>
    <Scripts/>
  </>
);

export default Home;
