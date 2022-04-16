import { FeedbackContext } from "@/context/FeedbackContext"
import { useContext, useEffect } from "react"
import { Button } from "./Button"
import { Card } from "./Card"
import { Rating } from "./Rating"

export const FeedbackForm: React.FC = () => {
  const { text, handleFormTextChange, btnDisabled, setBtnDisabled, message, handleSubmit, feedbackEdit, setText, setRating } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.feedback.text)
      setRating(feedbackEdit.feedback.rating)
    }
  }, [feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us?</h2>
        <Rating />
        <div className="input-group">
          <input type="text" placeholder="Write a review..." value={text} onChange={handleFormTextChange} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </Card >
  )
}
