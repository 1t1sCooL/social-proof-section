import {Stars} from "@/shared/ui/Stars/Stars";
import styles from './Rating.module.css'

interface IRatingItem{
    text: string
    className?: string
}

export const RatingItem = ({text, className}:IRatingItem) =>{
    return(
        <div className={`${styles.rating__review} ${className}`}>
            <Stars/>
            <h2>{text}</h2>
        </div>
    )
}