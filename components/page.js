import Head from "next/head";

import Footer from "./footer";
import Header from "./header";
import Links from "./links";

export default ({ children }) => (
  <div>
    <Head>
      <title>
        Petra Gulicher - Solutions Architect, Technologist, People-person.
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <hr />
    <Links />
    <main>{children}</main>
    <hr />
    <Links />
    <Footer />
  </div>
);
