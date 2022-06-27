import type {NextPage} from 'next';
import {Layout} from "../components/layout/Layout";
import TopBar from "../components/top-bar";
import Topnav from "../components/topnav";

const Home: NextPage = () => (
  <Layout>
    <div id="layout-wrapper">
      <TopBar/>
      <Topnav/>
    </div>
  </Layout>
);

export default Home;
