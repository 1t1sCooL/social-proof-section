import {RatingItem} from "@/features/rating/ui/RatingItem";

export const RatingList = () => {
    return (
        <div className="rating">
            <RatingItem text={'Rated 5 Stars in Reviews'} />
            <RatingItem text={'Rated 5 Stars in Reviews'} className={'margin-left--48'}/>
            <RatingItem text={'Rated 5 Stars in Reviews'} className={'margin-left--96'}/>
        </div>
    )
}