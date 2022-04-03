import { Box } from "@mui/material"
import { VFC } from "react"

export const Component: VFC<{ count: number }> = ({ count }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(2rem, 1fr))",
        gridGap: "0.5rem",
        p: 1,
      }}
    >
      {Array.from(Array(count).fill(null)).map((value, index) => (
        <Box
          key={index}
          sx={{
            px: 1,
            py: 0.5,
            color: "white",
            bgcolor: "primary.main",
            borderRadius: "6px",
            boxShadow: 1,
          }}
        >
          {index}
        </Box>
      ))}
    </Box>
  )
}
