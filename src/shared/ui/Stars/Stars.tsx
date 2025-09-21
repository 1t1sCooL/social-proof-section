import styles from './stars.module.css'

export const Stars = () => {
    return (
        <div className={styles.stars}>
            <img src="/images/icon-star.svg" alt="rating star"/>
            <img src="/images/icon-star.svg" alt="rating star"/>
            <img src="/images/icon-star.svg" alt="rating star"/>
            <img src="/images/icon-star.svg" alt="rating star"/>
            <img src="/images/icon-star.svg" alt="rating star"/>
        </div>
    )
}