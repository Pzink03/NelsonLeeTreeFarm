import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="w-full h-full pt-6 bg-secondary-green">
        <div className=" ">
            <p className=" font-helvetica text-xl text-center font-semibold text-black">
                Still have questions? Don't hesitate to get in contact {" "}

                {" "}
                with us
            </p>
            <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-4 md:gap-16">
                <div className="flex">
                    <img
                    src="/assets/images/TreeFarmLogo.jpg"
                    className="w-72 h-72 justify-items-start"
                    />
                </div>
                <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
                    <div className="flex flex-col text-black text-lg items-center justify-center">
                                        <h1 className="text-xl font-helvetica text-black font-semibold border-b-4 border-primary-green px-4 pb-1 mb-1 ">Contacts</h1>
                                        <p className=" text-font-raleway px-2 black font-medium">Phone: (614) 725-5620</p>
                                        <p className=" font-raleway px-2 black font-medium">Email: testemail@gmail.com</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 pt-4 text-sm">
                        <header className="text-xl font-helvetica text-black font-semibold ">
                            Follow Us:
                        </header>
                        <a href="/" className="z-50">
                                                <p className="text-white flex justify-center items-center">
                                                    <TiSocialFacebookCircular color="black" size={70} />
                                                </p>
                                            </a>
                    </div>

                </div>


                <div className="flex items-center justify-center gap-4 flex-col text-sm pt-4">
                    <header className="text-xl font-helvetica text-black font-semibold border-b-4 px-4 pb-1 mb-1 ">
                        Hours
                    </header>
                    <ul className='flex flex-col justify-center text-black text-lg items-center gap-2'>
                        <li className="flex gap-2 items-center justify-center">
                            <p className="font-raleway px-2 black font-medium">
                                Monday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className="px-8 pl-4 font-medium font-raleway">
                                8AM - 4PM
                            </p>
                        </li>
                        <li className="flex gap-2 items-center justify-center">
                            <p className="font-raleway px-2 black font-medium">
                                Tuesday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className="px-8 pl-4 font-medium font-raleway">
                                8AM - 4PM
                            </p>
                        </li>
                        <li className="flex gap-2 items-center  justify-center">
                            <p className="font-raleway px-2 black font-medium">
                                Wednesday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className=" font-medium font-raleway pr-4">
                                Appointment Only
                            </p>
                        </li><li className="flex gap-2 items-center justify-center">
                            <p className="font-raleway px-2 black font-medium">
                                Thursday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className="px-8 pl-4 font-medium font-raleway">
                                8AM - 4PM
                            </p>
                        </li>
                        <li className="flex gap-2 items-center justify-center">
                            <p className=" pr-3 font-raleway font-medium">
                                Friday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className="pl-4 font-medium font-raleway">
                                8AM - 4PM
                            </p>
                        </li>
                        <li className="flex gap-2 items-center justify-center">
                            <p className="px-2 font-raleway font-medium">
                                Saturday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className=" px-8 pl-4 font-medium font-raleway">
                                8AM - 2PM
                            </p>
                        </li>
                        <li className="flex  gap-2 items-center justify-center">
                            <p className="px-2 font-raleway font-medium">
                                Sunday
                            </p>
                            <div className="pt-2 border-b border-black w-6"></div>
                            <p className="px-9 font-medium font-raleway">
                                Closed
                            </p>
                        </li>
                    </ul>


                </div>
                <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
                    <header className="text-xl text-black font-helvetica font-semibold border-b-4 px-4 pb-1">
                        Quick Links
                    </header>
                    <Link className="text-black text-lg" to={"/"}>Home</Link>
                    <Link className="text-black text-lg" to={"/contact"}>Contact</Link>
                    <Link className="text-black text-lg" to={"/about"}>About</Link>
                    <Link className="text-black text-lg" to={"/gallery"}>Gallery</Link>
                </div>
            </div>
        </div>
    </div>
    )
}
