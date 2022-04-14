import FeedbackData from "@/data/data";
import { Feedback, FeedbackContextProviderProps } from "@/types/types";
import { createContext, useState } from "react";

export type FeedbackContextType = {
  feedbacks: Feedback[]
  setFeedbacks: React.Dispatch<React.SetStateAction<Feedback[]>>
  handleDelete: (value: number) => void
}

export const FeedbackContext = createContext({} as FeedbackContextType)

export const FeedbackContextProvider = ({ children }: FeedbackContextProviderProps) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedbacks, setFeedbacks, handleDelete }}>{children}</FeedbackContext.Provider>
  )
}
