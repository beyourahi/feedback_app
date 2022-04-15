import { FeedbackContext } from "@/context/FeedbackContext"
import { useContext } from "react"
import { Button } from "./Button"
import { Card } from "./Card"
import { Rating } from "./Rating"

export const FeedbackForm: React.FC = () => {
  const { text, handleFormTextChange, btnDisabled, message } = useContext(FeedbackContext)

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <Rating />
        <div className="input-group">
          <input type="text" placeholder="Write a review..." value={text} onChange={handleFormTextChange} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </Card>
  )
}
