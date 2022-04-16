import { FeedbackContext } from "@/context/FeedbackContext"
import { useContext, useEffect } from "react"

export const Rating: React.FC = () => {
  const { selected, setSelected, handleRadioInputChange, feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.feedback.rating)
  }, [feedbackEdit])

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            id={`num${i + 1}`}
            value={i + 1}
            name="rating"
            onChange={handleRadioInputChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}
