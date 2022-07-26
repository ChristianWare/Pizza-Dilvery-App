import Head from "next/head";
import Image from "next/image";
import Featured from "../src/comps/featured/Featured";
import PizzaList from "../src/comps/pizzaList/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Shoppe In Goodyear</title>
        <meta name="description" content="Best Pizza Shop In Goodyear" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
