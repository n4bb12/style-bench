import { VFC } from "react"

export const Tw: VFC<{ count: number }> = ({ count }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4 p-4">
      {Array.from(Array(count).fill(null)).map((value, index) => (
        <div
          key={index}
          className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm shadow-slate-700"
        >
          {index}
        </div>
      ))}
    </div>
  )
}
