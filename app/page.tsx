
import { ChevronRight } from "lucide-react"




export default function LandingPage() {
  return (
    <div className="text-[#918a8aee] flex flex-col justify-center items-center gap-5 w-full  p-8 relative py-5 ">
      <h3 className="text-[#c05415] font-bold">
        Consistency Beats Talent.

      </h3>
      <h1 className="hollowingText text-white font-bold text-4xl text-center leading-[1.3] tracking-[3]" >Say Goodbye to Your Social Life. Say Hello to Your <span className=" border border-red-600 rounded text-amber-400 mt-5 inline-block px-7 py-2 tracking-[0] font-serif "> IAS Dream </span></h1>
      <p className="text-center">
        Every Day You Study Brings You One Step Closer to Your Dream Rank.
      </p>
      <div>

      </div>
      <button className="p-3 flex gap-x-1 rounded-2xl bg-[#cc5327] text-white animate__animated animate__shakeX">Start Your Journey

        <span className="animate__animated "><ChevronRight /></span>
      </button>

    </div>
  )
}
