import { Banner } from "@/components/Banner";
import { HomeButtons } from "@/components/HomeButtons";
import { ServiceCard } from "@/components/ServiceCard";

export function Home(){
    return (
        <>
            <Banner title="Nelson Lee Tree Farm" style="min-h-screen" image="/assets/images/MainPic.png" subtitle={<HomeButtons />} />
            <div className="flex bg-stone-100 flex-col justify-center items-center">

                    <ServiceCard />
                <div className="max-w-7xl">
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 flex flex-col bg-gray-100 shadow-md md:p-10 p-4 lg:flex-row max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/Evergreens.png'
                            className=" w-[350px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                                    <header className="text-3xl font-helvetica font-base border-b-2  pb-1 mb-4">
                                        Title
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 flex bg-secondary-green shadow-md flex-col md:p-10 p-4 lg:flex-row-reverse max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/Hydrangea1.jpg'
                            className=" w-[350px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-end">
                                    <header className="text-3xl font-helvetica font-base border-b-2  pb-1 mb-4">
                                        Title
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 flex flex-col md:p-10 bg-gray-100 shadow-md p-4 lg:flex-row max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/Plants.jpg'
                            className=" w-[350px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                                    <header className="text-3xl font-helvetica font-base border-b-2  pb-1 mb-4">
                                        Title
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
