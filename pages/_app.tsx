import React, { useEffect } from "react";
import { Layout } from "antd";
import Head from "next/head";
import PublicNavbar from "../components/navbar/PublicNavbar";
import { useRouter } from 'next/router';

require('../styles/variables.less');

const { Header, Content, Footer } = Layout;
const DARK_BACKGROUND_ROUTES = ['/jobs', '/candidates'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    console.log("ROUTE CHANGE ---- ", router);
  });
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          background: "#fff",
          zIndex: 1,
          width: "100%",
          borderBottom: '1px solid #eaeaea'
        }}
      >
        <PublicNavbar />
      </Header>

      <Content className={DARK_BACKGROUND_ROUTES.includes(router.route) ? "main-content dark" : 'main-content'}>
        <Component {...pageProps} />
      </Content>

      <Footer
        style={{ position: "fixed", bottom: 0, zIndex: 1, width: "100%" }}
      >
        Hai Footer
      </Footer>
    </Layout >
  );
}

export default MyApp;
