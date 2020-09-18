import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout/layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Provider slug={router.route}>
      <Head>
        <title>Krishnendu Sudheesh</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Portfolio website of Krishnendu Sudheesh"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
