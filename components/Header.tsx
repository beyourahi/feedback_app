import { HeaderProps } from "@/types/types"

export const Header: React.FC<HeaderProps> = ({ title, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95"
}
