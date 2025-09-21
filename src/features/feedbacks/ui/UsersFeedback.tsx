import styles from './Feedbacks.module.css'

interface IUsersFeedback{
    name: string
    feedback: string
    imgSrc: string
    className?: string
}

export const UsersFeedback = ({name, feedback, imgSrc, className}:IUsersFeedback) =>{
    return (
        <div className={`${styles.product__testimonial__user} ${className}`}>
            <div className={styles.profile__info}>
                <div className={styles.profile__photo}>
                    <img src={imgSrc} alt="photography"/>
                </div>
                <div className={styles.profile__name}>
                    <h3>{name}</h3>
                    <h4>Verified Buyer</h4>
                </div>
            </div>
            <div>
                <p>{feedback}</p>
            </div>
        </div>
    )
}