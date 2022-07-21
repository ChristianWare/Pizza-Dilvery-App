 import styles from './PizzaCard.module.css'
 import Image from 'next/image'
 import pizza from '../../../../public/images/pizza.png'

function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src={pizza} alt='' width={500} height={500} />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>
                Here is a description of the pizza you are currently looking at. 
            </p>
        </div>
    )
}

export default PizzaCard
