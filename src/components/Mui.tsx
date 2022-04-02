import { Box } from "@mui/material"
import { VFC } from "react"

export const Mui: VFC<{ count: number }> = ({ count }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
        gridGap: "1rem",
        p: 2,
      }}
    >
      {Array.from(Array(count).fill(null)).map((value, index) => (
        <Box
          key={index}
          sx={{
            px: 2,
            py: 1,
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
