import {RatingItem} from "@/features/rating/ui/RatingItem";
import styles from './Rating.module.css'

export const RatingList = () => {
    return (
        <div className={styles.rating}>
            <RatingItem text={'Rated 5 Stars in Reviews'} />
            <RatingItem text={'Rated 5 Stars in Reviews'} className={'margin-left--48'}/>
            <RatingItem text={'Rated 5 Stars in Reviews'} className={'margin-left--96'}/>
        </div>
    )
}