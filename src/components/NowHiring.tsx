export function NowHiring(){
    return (
        <>
        <div className=" md:max-w-7xl w-full flex justify-center px-8 pt-10">
                <img
                src="assets/images/TreeImageLeft.svg"
                className="md:w-80 md:h-80 md:flex hidden"
                />
                <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col ">
                <p className="text-center font-bold text-primary-green text-3xl font-helvetica">Now Hiring</p>
            </div>
            <div className="bg-gray-100 flex flex-col justify-center items-center p-2">
                <h1 className="text-red-800 font-semibold text-2xl pb-2">Part Time Seasonal Help</h1>
                <h1 className=" font-semibold text-xl py-4">Competitive Pay</h1>
                <h1 className=" font-semibold text-xl py-4">Primary Responsibilities</h1>
                <ul className="list-disc">

                <li className="text-lg">
                Loading/Unloading trees
                </li>
                <li className="text-lg">
                Watering plants and maintaining a healthy environment
                </li>
                <li className="text-lg">
                Performing various physical tasks around the farm
                </li>
                <li className="text-lg">
                Contributing to a positive and enjoyable atmosphere
                </li>
                </ul>
                <h1 className="py-4 font-semibold text-xl">We’re Looking For Individuals Who Are:</h1>
                <ul className="list-disc">

                <li className="text-lg">
                Punctual and reliable, with a strong sense of responsibility
                </li>
                <li className="text-lg">
                Hardworking with a solid work ethic and a can-do attitude
                </li>
                <li className="text-lg">
                Knowledgeable about plants—a plus, but not required
                </li>
                <li className="text-lg">
                Able to thrive in an outdoor, active work environment
                </li>
                </ul>
                <p className="py-4"><span className="font-semibold ">Please Note:</span> We are a drug/tobacco free workplace.</p>
                <h1 className=" font-semibold text-xl py-4">To Apply:</h1>
            </div>

            </div>
            <img
                src="assets/images/treeimageright.svg"
                className="md:w-80 md:h-80 md:flex hidden"
                />

        </div>
            <div className="bg-primary-green text-white font-medium font-raleway p-2">
                <p className="text-center font-bold text-white md:text-2xl text-xl flex flex-col md:flex-row justify-center items-center">
                    Please reach out to

                <a href={"mailto:nelsonleetreefarm@gmail.com"}>
                                    <p className=" px-2 underline">nelsonleetreefarm@gmail.com</p>
                                </a>

                or call (859) 300-1249 | (859) 433-0095
                </p>

            </div>

        </>
    )
}
