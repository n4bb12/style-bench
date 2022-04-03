import { VFC } from "react"

export const Style: VFC<{ count: number }> = ({ count }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(2rem, 1fr))",
        gridGap: "0.5rem",
        padding: "0.5rem",
      }}
    >
      {Array.from(Array(count).fill(null)).map((value, index) => (
        <div
          key={index}
          style={{
            padding: "0.25rem 0.5rem",
            color: "white",
            background: "blue",
            borderRadius: "6px",
            boxShadow:
              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(51, 65, 85) 0px 1px 2px 0px",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  )
}
