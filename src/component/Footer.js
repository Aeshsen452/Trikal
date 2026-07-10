import { House, LibraryBig, BookDown } from "lucide-react";
import { RiTelegramFill } from "@remixicon/react";


const FooterContainer = ({ item }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 text-[var(--textcolor)]">
            <div className="flex justify-center items-center"> {item.Icon} </div>
            <p className=" font-bold text-sm"> {item.label}  </p>

        </div>
    )
}

const Footer = () => {

    const Items = [
        {
            label: "Home",
            Icon: <House />
        },
        {
            label: "My Courses",
            Icon: <LibraryBig />
        },
        {
            label: "My Downolds",
            Icon: <BookDown />
        },
        {
            label: "Telegram",
            Icon: <RiTelegramFill />
        },
    ]


    return (
        <footer className="w-full h-20 bg-[var(--primarycolor)] fixed bottom-2 flex justify-between p-3 gap-5">
            {
                Items.map((item, index) => (<FooterContainer key={index} item={item} />))
            }
        </footer>
    )
}

export default Footer