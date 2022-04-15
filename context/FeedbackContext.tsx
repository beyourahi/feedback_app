import FeedbackData from "@/data/data";
import { FeedbackContextProviderProps, FeedbackContextType } from "@/types/types";
import { createContext, useState } from "react";

export const FeedbackContext = createContext({} as FeedbackContextType)

export const FeedbackContextProvider = ({ children }: FeedbackContextProviderProps) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)
  const [selected, setSelected] = useState(10)

  const handleFormTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage("")
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters")
    } else {
      setBtnDisabled(false)
      setMessage("")
    }
    setText(e.target.value)
  }

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
  }

  const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.target.value)
    setRating(+e.target.value)
  }

  return (
    <FeedbackContext.Provider value={{
      feedbacks, text, message, btnDisabled, rating, selected, setFeedbacks, setText, setBtnDisabled, setMessage, setRating, setSelected, handleDelete, handleFormTextChange, handleRadioInputChange
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}
