import Image from "next/image";
import styles from "./Navbar.module.css";
import phone from "../../../public/images/telephone.png";
import logo from "../../../public/images/logo.png";
import cart from "../../../public/images/cart.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={phone} alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>602-778-8888</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt="" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blig</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src={cart} alt="" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
