import { Banner } from "@/components/Banner";
import { HomeButtons } from "@/components/HomeButtons";
import { ServiceCard } from "@/components/ServiceCard";
import { Handshake, Leaf, Sprout } from "lucide-react";

export function Home(){
    return (
        <>
            <Banner title="Welcome to Nelson Lee Tree Farm" style="min-h-screen" image="/assets/images/MainPic.png" subtitleButton={<HomeButtons />} subtitle="At Nelson Lee Tree Farm, we believe in cultivating more than just trees and plants. As a family-owned and operated farm, we take pride in providing trees, plants, bulk mulch, and topsoil with a commitment to sustainability and honesty. Whether you're a passionate gardener, a professional landscaper, or a homeowner looking to enhance your space, we’re here to help you grow." />
            <div className="flex bg-stone-100 flex-col justify-center items-center">
                <h1 className="mt-24 md:pb-10 font-semibold text-center text-2xl md:text-3xl">Please, be sure to call to check on current availability and pricing!</h1>
                    <ServiceCard />
                    <h1 className="text-center md:text-4xl font-semibold text-2xl border-primary-green border-b-4 pb-2">Our Promise</h1>
                <div className="w-full md:px-10">
                    <div className=" w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 flex flex-col bg-gray-100 shadow-md md:p-2 p-4 lg:flex-row max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/Evergreens.png'
                            className=" w-[550px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col p-2 justify-center text-center items-center lg:items-center">
                                <div className="px-2 mb-8">
                                    <Sprout size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl text-xl font-helvetica font-semibold border-b-2 text-center mb-2">
                                    Sustainability First
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    We prioritize eco-friendly practices, ensuring that every tree and plant we grow supports a healthier environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-full px-4 flex items-end justify-end pb-10" >
                        <div className="gap-10 flex bg-secondary-green shadow-md flex-col md:p-2 p-4 lg:flex-row-reverse max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/Hydrangea1.jpg'
                            className=" w-[550px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col p-4 justify-center text-center items-center lg:items-en">
                                <div className="px-2 mb-8">
                                    <Leaf size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl text-xl font-helvetica font-semibold border-b-2 text-center pb-1 mb-4">
                                    Passion for Green
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    We’re dedicated to our craft, bringing years of knowledge and passion to every product we offer.                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-full px-4 flex items-start justify-start pb-10" >
                        <div className="gap-10 flex flex-col md:p-2 bg-gray-100 shadow-md p-4 lg:flex-row max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/Plants.jpg'
                            className=" w-[550px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col p-4 justify-center text-center items-center lg:items-center">
                                <div className="px-2 mb-8">
                                    <Handshake size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl text-xl font-helvetica font-semibold border-b-2 text-center pb-1 mb-4">
                                    Honest Service
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    You can trust us to provide the highest quality and most reliable service, with transparency and integrity at every step.                             </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
