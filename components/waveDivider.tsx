import type React from "react"

interface WaveDividerProps {
  inverted?: boolean
}

const WaveDivider: React.FC<WaveDividerProps> = ({ inverted = false }) => {
  return (
    <div className={`relative h-16 ${inverted ? "bg-background" : "bg-primary"}`}>
      <svg
        className={`absolute ${inverted ? "top-0 rotate-180" : "bottom-0"} w-full h-16 ${inverted ? "text-primary" : "text-background"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default WaveDivider

