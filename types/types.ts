export type ChildrenType = {
  children: React.ReactNode
}

export type CardProps = ChildrenType

export type FeedbackContextProviderProps = ChildrenType

export type Feedback = {
  id: number
  rating: number
  text: string
}

export type FeedbackItemProps = {
  feedback: Feedback
}

export type HeaderProps = {
  title?: string
  bgColor?: string
  textColor?: string
}
