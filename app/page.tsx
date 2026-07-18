
"use client"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react";

interface CircleContainerProps {
  imgsrc: string;
}

const CircleContainer = ({ imgsrc }: CircleContainerProps) => {
  return (
    <img src={imgsrc} className="w-10 h-10 object-cover rounded-full"></img>
  )
}


export default function LandingPage() {

  const SubscriberImage = [
    "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8fDA%3D"
  ]

  const spanRef = useRef<HTMLSpanElement | null>(null);
  console.log(spanRef)



  const words = ["IAS", "Dream"];

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const reverse = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!spanRef.current) return;

      const currentWord = words[wordIndex.current];

      if (!reverse.current) {
        // Typing
        spanRef.current.innerText = currentWord.slice(
          0,
          charIndex.current + 1
        );

        charIndex.current++;

        if (charIndex.current > currentWord.length) {
          reverse.current = true;
        }
      } else {
        // Deleting
        spanRef.current.innerText = currentWord.slice(
          0,
          charIndex.current - 1
        );

        charIndex.current--;

        if (charIndex.current === 0) {
          reverse.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }
    }, reverse.current ? 100 : 200);

    return () => clearInterval(interval);
  }, []);









  return (
    <div className="text-[#918a8aee] flex flex-col justify-center items-center gap-5 w-full  py-10 relative ">
      <h3 className="text-[#c05415] font-bold lg:text-2xl">
        Consistency Beats Talent.

      </h3>
      <h1 className="hollowingText text-white font-bold text-4xl lg:text-5xl text-center leading-[1.3] tracking-[3] lg:px-80" >Say Goodbye to Your Social Life. Say Hello to Your
        <span id="span" ref={spanRef} className=" lg:flex lg:w-60 lg:ml-60    rounded text-amber-400 mt-5 inline-block px-7 py-2 tracking-normal font-serif ">  </span></h1>
      <p className="text-center px-5">
        Every Day You Study Brings You One Step Closer to Your Dream Rank.
      </p>
      <div className="">
        <div className="flex">
          {SubscriberImage.map((img, index) => {
            return (
              <CircleContainer key={index} imgsrc={img} />
            )
          })}

        </div>
        <p className="text-[#cc5327]">5k+ Learning Student Platform</p>

      </div>
      <button className="p-3 flex gap-x-1 rounded-2xl bg-[#cc5327] text-white animate__animated animate__shakeX">Start Your Journey

        <span className="animate__animated "><ChevronRight /></span>
      </button>

    </div>
  )
}
