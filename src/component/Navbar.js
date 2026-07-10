import { TextAlignJustify } from 'lucide-react';
import Image from "next/image"


const Navbar = () => {
    return (
        <nav className="w-full  bg-[var(--primarycolor)] border border-[#24140b] sticky top-0 p-3 grid grid-cols-6">
            <div className="flex items-center gap-1 col-span-4 ">
                <Image
                    width={100}
                    height={100}
                    alt="logo"
                    src="/assests/logo.jpeg"
                    className="rounded-full w-12 h-12 "
                />
                <h1 className="text-[#918a8aee] font-semibold text-sm px-3">
                    Trikal IAS Notes & Lecture Foundation
                </h1>
            </div>

            <div className=" col-span-2 flex justify-end items-center px-5">
                <TextAlignJustify size={20} className="text-[var(--textprimarycolor)]" />
            </div>


        </nav>
    )
}

export default Navbar