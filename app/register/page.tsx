import React from "react";

const Contact = () => {
    return (
        <div className="bg-[] m-20 p-20 min-h-[100vh]">
            <div className="flex-justify-center items-center flex-col">
                <h3 className=" text-[#2b2a2a] text-4xl font-bold mt-18 mb-8">Bienvenido a LookStyle</h3>
                <p className="text-gray-500 mb-6">Bienvenido a LookStyle, ingresa tus datos para registrarse </p>

                <div className="bg-[#9acaeb] w-2/5 p-6 rounded-lg shadow-lg ">
                    <form className="mx-auto">
                        <div className="my-3 mx-auto">
                            <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your name" />
                        </div>
                        <div className="my-3 mx-auto">
                            <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your last name" />
                        </div>
                        <div className="my-3 mx-auto">
                            <input type="email" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your email" />
                        </div>
                        <div className="my-3 mx-auto">
                            <input type="password" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your password" />
                        </div>
                        <div className="my-3 mx-auto">
                            <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your phone" />
                        </div>

                        <button className="w-full p-3 mt-2 bg-[#846add] text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
                          Registrarse
                        </button>
                    </form>
                    

                </div>

            </div>
            



        </div>
    )
}

export default Contact