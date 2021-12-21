import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Installation from "../components/Installation";

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <Header></Header>
      <Hero></Hero>
      <Installation></Installation>
      <Footer></Footer>
    </>
  );
}