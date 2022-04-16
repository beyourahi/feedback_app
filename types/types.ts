export type ChildrenType = {
  children: React.ReactNode
}

export type CardProps = ChildrenType

export type FeedbackContextProviderProps = ChildrenType

export type Feedback = {
  id?: string
  rating?: number
  text?: string
}

export type FeedbackEdit = {
  feedback: Feedback
  edit: boolean
}

export type FeedbackItemProps = {
  feedback: Feedback
}

export type FeedbackContextType = {
  feedbacks: Feedback[]
  text: string | undefined
  message: string
  btnDisabled: boolean
  rating: number | undefined
  selected: number | undefined
  feedbackEdit: FeedbackEdit
  setFeedbacks: React.Dispatch<React.SetStateAction<Feedback[]>>
  setFeedbackEdit: React.Dispatch<React.SetStateAction<FeedbackEdit>>
  setText: React.Dispatch<React.SetStateAction<string | undefined>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
  setRating: React.Dispatch<React.SetStateAction<number | undefined>>
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>
  handleDelete: (value: string | undefined) => void
  handleEdit: (value: Feedback) => void
  handleFormTextChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  handleRadioInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (value: React.FormEvent<HTMLFormElement>) => void
}

export type HeaderProps = {
  title?: string
  bgColor?: string
  textColor?: string
}

export type ButtonProps = {
  children: React.ReactNode
  version?: string
  type?: "button" | "submit" | "reset" | undefined
  isDisabled?: boolean
}

