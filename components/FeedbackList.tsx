import FeedbackData from "@/data/data"
import { FeedbackItem } from "./FeedbackItem"

export const FeedbackList: React.FC = () => {
  return (
    <div>
      {FeedbackData.map(feedback => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div >
  )
}

