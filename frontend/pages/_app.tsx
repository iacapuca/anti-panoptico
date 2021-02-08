import React from "react";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
