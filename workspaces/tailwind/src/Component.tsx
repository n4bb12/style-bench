import { VFC } from "react"

export const Component: VFC<{ count: number }> = ({ count }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2 p-2">
      {Array.from(Array(count).fill(null)).map((value, index) => (
        <div
          key={index}
          className="py-1 px-2 text-white bg-blue-700 rounded-md shadow-sm shadow-slate-700"
        >
          {index}
        </div>
      ))}
    </div>
  )
}
