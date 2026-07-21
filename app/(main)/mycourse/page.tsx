import React from 'react'




const CardContainer = () => {
    return (
        <div className="max-w-md mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                UPSC Foundation Course
            </h2>

          

            <div className="flex gap-4">
                <button
                    className="flex-1 py-3 rounded-xl font-semibold bg-[#7e3a12] text-white hover:scale-105 transition-all duration-300"
                >
                    हिन्दी
                </button>

                <button
                    className="flex-1 py-3 rounded-xl font-semibold bg-blue-500 text-white hover:scale-105 transition-all duration-300"
                >
                    English
                </button>
            </div>
        </div>
    )
}

const page = () => {
    return (
        <div className=' w-full h-full grid grid-cols-1 lg:grid-cols-4 px-5 gap-5 py-10 pb-44'>

            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />



        </div>
    )
}

export default page