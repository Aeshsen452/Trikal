"use client"

import { TextAlignJustify } from 'lucide-react';
import Image from "next/image"
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const listItems = [
        {
            label: "Home",
            routes: "/"
        },
        {
            label: "About",
            routes: "/"
        },
        {
            label: "Contact Us",
            routes: "/"
        },



    ]

    const baseurl = process.env.NEXT_PUBLIC_API_URL;
    console.log(baseurl)
    return (
        <>
            <nav className="w-full  bg-[var(--primarycolor)] border border-[#24140b] sticky top-0 p-3 grid grid-cols-6">

                <>
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

                    <div className=" col-span-2 flex justify-end items-center px-5 "

                    >
                        <TextAlignJustify size={20} className="text-[var(--textprimarycolor)]" onClick={() => setOpen(true)} />
                    </div>
                </>


            </nav>


            <div
                className={`fixed top-0 right-0 h-screen w-full z-50 bg-[#0b0804] text-white transition-transform duration-700 flex flex-col items-end p-5 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="p-4"
                >
                    ✕
                </button>

                <ul className="p-4 space-y-5 w-full  ">

                    {listItems.map((list) => (
                        <li className='border-b-2  border-l-2 border-[#24140b] p-2 rounded '>{list.label}</li>
                    ))}

                </ul>

                <div className='w-full h-96 py-14 flex justify-center items-end '>
                    <div>
                        <button className='bg-[#7e3a12] text-white py-2 px-4 rounded-2xl'>
                            Login/Signup
                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Navbar




