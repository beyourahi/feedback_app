import { FeedbackItemProps } from "@/types/types"
import { Card } from "./Card"

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback: { id, rating, text } }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card >
  )
}

