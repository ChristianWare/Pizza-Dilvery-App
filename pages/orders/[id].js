import Image from "next/image";
import styles from "../../styles/Order.module.css";
import payment from "../../public/images/paid.png";
import checked from "../../public/images/checked.png";
import bake from "../../public/images/bake.png";
import bike from "../../public/images/bike.png";
import delivered from "../../public/images/delivered.png";

function Order() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <>
      <h1>Order Progress Page</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <div className={styles.row}> */}
            <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>123456789101112</td>
                <td>Chris Ware</td>
                <td>123 Main St. NY, NY 10023</td>
                <td>$39.80</td>
              </tr>
              </tbody>
            </table>
          {/* </div> */}
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src={payment} width={30} height={30} />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={checked}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image src={bake} width={30} height={30} />
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={checked}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image src={bike} width={30} height={30} />
              <span>On The Way</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={checked}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image src={delivered} width={30} height={30} />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src={checked}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totaltextTitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totaltextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totaltextTitle}>Total:</b>$79.60
            </div>
            <button disabled className={styles.button}>
              PAID!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
