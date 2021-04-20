import Image from 'next/image'
import styles from '../styles/Card.module.css'
function Card(props) {
    let x = new Date(props.date);
    return (
        <div className={`container pb-5 ${styles.card}`}>
            <Image src={props.image} width="100%" height="65px" layout="responsive" className={styles.card_image}/>
            <h5 className={`mt-4 ${styles.card_title}`}>{props.title}</h5>
            <small>by <strong>{props.author} </strong> {x.toDateString()}</small>
        </div>
    )
}

export default Card
