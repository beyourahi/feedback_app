export type ChildrenType = {
  children: React.ReactNode
}

export type CardProps = ChildrenType

export type FeedbackContextProviderProps = ChildrenType

export type Feedback = {
  id: string
  rating: number
  text: string
}

export type FeedbackItemProps = {
  feedback: Feedback
}

export type FeedbackContextType = {
  feedbacks: Feedback[]
  text: string
  message: string
  btnDisabled: boolean
  rating: number
  selected: number
  setFeedbacks: React.Dispatch<React.SetStateAction<Feedback[]>>
  setText: React.Dispatch<React.SetStateAction<string>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
  setRating: React.Dispatch<React.SetStateAction<number>>
  setSelected: React.Dispatch<React.SetStateAction<number>>
  handleDelete: (value: string) => void
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

