import Image from 'next/image'
import styles from '../styles/Card.module.css'
function HCard(props) {
    return (
        <div className={`container-fluid ${styles.card}`}>
            <div className="row w-100">
                <div className="col-12 col-lg-4">
                     <Image src={props.image} width="100%" height="65px" layout="responsive" className={styles.card_image}/>
                </div>
                <div className="col-12 col-lg-4">
                    <h5 className={` mt-4 mt-lg-1 ${styles.card_title}`}>{props.title}</h5>
                    <small>{props.date}</small>
                </div>
            </div>
            <hr className="my-5"/>
        </div>
    )
}

export default HCard