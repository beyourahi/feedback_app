import { FaTimes } from "react-icons/fa"
import { FeedbackItemProps } from "@/types/types"
import { Card } from "./Card"
import { useContext } from "react"
import { FeedbackContext } from "@/context/FeedbackContext"

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback: { id, rating, text } }) => {
  const { handleDelete } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card >
  )
}

