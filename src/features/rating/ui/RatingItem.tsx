import {Stars} from "@/shared/ui/Stars/Stars";

interface IRatingItem{
    text: string
    className?: string
}

export const RatingItem = ({text, className}:IRatingItem) =>{
    return(
        <div className={`rating__review ${className}`}>
            <Stars/>
            <h2>{text}</h2>
        </div>
    )
}