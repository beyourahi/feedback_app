import { FeedbackContext } from "@/context/FeedbackContext"
import { useContext } from "react"
import { FeedbackItem } from "./FeedbackItem"

export const FeedbackList: React.FC = () => {
  const { feedbacks } = useContext(FeedbackContext)

  return !feedbacks || feedbacks.length === 0 ? (
    <h1>No Feedback Yet</h1>
  ) : (
    <div className="feedback-list">
      {feedbacks.map(feedback => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  )
}

