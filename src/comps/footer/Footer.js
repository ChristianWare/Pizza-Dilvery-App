import Image from "next/image";
import styles from "./Footer.module.css";
import bg from "../../../public/images/bg.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        <Image src={bg} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED PLCE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Rd #304
            <br /> New York, NY 10023
            <br /> 212-458-7884
          </p>
          <p className={styles.text}>
            1215 W 24th St
            <br /> New York, NY 10023
            <br /> 212-458-7777
          </p>
          <p className={styles.text}>
            66 W Amsterdam Ave
            <br /> New York, NY 10023
            <br /> 212-458-8888
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - SUNDAY:
            <br /> 10:00am - 8:00pm
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
