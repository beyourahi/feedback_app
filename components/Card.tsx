import { CardProps } from "@/types/types"

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      <div>{children}</div>
    </div>
  )
}

