import React from "react";
import App from "next/app";
import { DoughCalculatorInputProvider } from "../contexts/doughCalculatorContext";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <div>hello world</div>
        <DoughCalculatorInputProvider>
          <Component {...pageProps} />
        </DoughCalculatorInputProvider>
      </div>
    );
  }
}
export default MyApp;
