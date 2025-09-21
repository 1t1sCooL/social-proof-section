import {Advertisement} from "@/features/Advertisement/ui/Advertisement";
import {Feedbacks} from "@/features/feedbacks/ui/Feedbacks";

export const FeedbackSection = () => {
    return (
        <div className="wrapper">
            <Advertisement/>
            <Feedbacks/>
        </div>
    )
}