import {Heading} from "@/features/heading/ui/Heading";
import {RatingList} from "@/features/rating/ui/RatingList";
import styles from './Advertisement.module.css'

export const Advertisement = () => {
    return (
        <section className={styles.product__ad}>
            <Heading/>
            <RatingList/>
        </section>
    )
}