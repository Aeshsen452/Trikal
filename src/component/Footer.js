"use client";
import { useRouter } from "next/navigation";
import { House, LibraryBig, BookDown } from "lucide-react";
import { RiTelegramFill } from "@remixicon/react";
import { useState } from "react";


const FooterContainer = ({ item, handleCLick, active }) => {
    return (
        <div className=
            {`flex flex-col lg:flex-row justify-center items-center gap-2 ] cursor-pointer ${active === item.index ? "text-[#7e3a12]" : "text-[#918a8aee]"}`}

            onClick={() => { handleCLick(item.index) }}>
            <div className="flex justify-center items-center"> {item.Icon} </div>
            <p className=" font-bold text-sm"> {item.label}  </p>

        </div>
    )
}

const Footer = () => {
    const router = useRouter();
    const [active, setActive] = useState(1);

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

    const handleCLick = (index) => {
        const routes = {
            1: "/",
            2: "/mycourse",
            3: "/mydownolds"
        }
        if (index < 4) {
            router.push(routes[index])
        } else {
            window.open("https://t.me/trikaalias")
        }
        return setActive(index)
    }


    return (
        <footer className="w-full h-20 bg-[var(--primarycolor)] fixed bottom-0 flex justify-between p-3 gap-5">
            {
                Items.map((item, index) => (<FooterContainer key={index} active={active} item={item} handleCLick={handleCLick} />))
            }
        </footer>
    )
}

export default Footer