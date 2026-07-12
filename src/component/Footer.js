"use client";

import { House, LibraryBig, BookDown } from "lucide-react";
import { RiTelegramFill } from "@remixicon/react";


const FooterContainer = ({ item, handleCLick }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 text-[var(--textcolor)] cursor-pointer " onClick={handleCLick}>
            <div className="flex justify-center items-center"> {item.Icon} </div>
            <p className=" font-bold text-sm"> {item.label}  </p>

        </div>
    )
}

const Footer = () => {

    const Items = [
        {
            label: "Home",
            Icon: <House />,
            index: 1
        },
        {
            label: "My Courses",
            Icon: <LibraryBig />,
            index: 2
        },
        {
            label: "My Downolds",
            Icon: <BookDown />,
            index: 3
        },
        {
            label: "Telegram",
            Icon: <RiTelegramFill />,
            index: 4
        },
    ]

    const handleCLick = () => {
      alert("ipos dfsafsadfksadkfsdakfjskdfksdafkjkdskfskadfksadfksdajfk")
    }


    return (
        <footer className="w-full h-20 bg-[var(--primarycolor)] fixed bottom-0 flex justify-between p-3 gap-5">
            {
                Items.map((item, index) => (<FooterContainer key={index} item={item} handleCLick={handleCLick} />))
            }
        </footer>
    )
}

export default Footer