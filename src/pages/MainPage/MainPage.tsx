import {FeedbackSection} from "@/widgets/ui/FeedbackSection";
//import '@/styles/global.css'
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.container}>
            <FeedbackSection/>
        </div>
    )
}