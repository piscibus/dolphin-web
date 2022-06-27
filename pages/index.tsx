import type {NextPage} from 'next';
import {Layout} from "../components/layout/Layout";
import TopBar from "../components/top-bar";
import Topnav from "../components/topnav";

const Home: NextPage = () => (
  <Layout>
    <TopBar/>
    <Topnav/>
  </Layout>
);

export default Home;
