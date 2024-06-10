import { SunIcon } from "@heroicons/react/16/solid"

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen text-slate-500">
        <SunIcon className="h-24 w-24 animate-bounce text-yellow-500" />

        <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
            Loading City Weather Information
        </h1>

        <h1 className="text-xl font-bold animate-pulse mb-10 text-center">
            Hold on, we are crunching the numbers and generating an AI summary of the Weather for you!
        </h1>
    </div>
  )
}

export default Loading