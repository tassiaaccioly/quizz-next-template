import React from "react";
import Head from "next/head";

//internal database
import db from "../db.json";

//styled components
import Widget from "../src/components/Widget/Widget";
import QuizzLogo from "../src/components/QuizzLogo/QuizzLogo";
import QuizzBg from "../src/components/QuizzBg/QuizzBg";
import Footer from "../src/components/Footer/Footer";
import GitHubCorner from "../src/components/GitHubCorner/GitHubCorner";
import { QuizzContainer } from "../styles/pageStyles";

export default function Home() {
  return (
    <QuizzBg backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={db.bg} key="bg_image" />
      </Head>
      <QuizzContainer>
        <QuizzLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizzContainer>
      <GitHubCorner projectUrl="https://github.com/tassiaaccioly" />
    </QuizzBg>
  );
}
