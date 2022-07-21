import PizzaCard from "../utils/pizzaCard/PizzaCard";
import styles from "./PizzaList.module.css";

function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        numquam impedit necessitatibus? Rem ipsa vitae libero, cupiditate
        molestiae tempore praesentium maxime est corporis enim, suscipit cum
        impedit. Repudiandae, reiciendis illum!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
