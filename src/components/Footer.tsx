import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="w-full h-full mt-10 bg-secondary-green">
        <div className="py-4 ">
            <p className=" font-helvetica text-xl text-center font-semibold text-black">
                Still have questions? Don't hesitate to get in {" "}

                {" "}
                with us
            </p>
            <div className="flex flex-col-reverse md:flex-row md:items-start justify-center items-center gap-4 md:gap-16">
                <div className="flex">
                    <img
                    src="/assets/images/TreeFarmLogo.jpg"
                    className="w-72 h-72 justify-items-start"
                    />
                </div>
                <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
                    <header className="text-xl text-white font-helvetica font-semibold border-b-4 px-4 pb-1">
                        Contact
                    </header>

                </div>
                <div className="flex items-center justify-center gap-4 flex-col text-sm pt-4">
                    <header className="text-xl font-helvetica text-white font-semibold border-b-4 px-4 pb-1 mb-1 ">
                        Hours
                    </header>
                    <ul className='flex flex-col justify-center text-lg items-center gap-2'>
                        <li className="flex gap-2 items-center justify-center">
                            <p className="font-raleway px-2 text-white font-medium">
                                Monday - Friday
                            </p>
                            <div className="pt-2 border-b border-white w-6"></div>
                            <p className="px-8 pl-4 text-white font-medium font-raleway">
                                8AM - 5PM
                            </p>
                        </li>
                        <li className="flex gap-2 items-center justify-center">
                            <p className=" pr-1 text-white font-raleway font-medium">
                                Saturday
                            </p>
                            <div className="pt-2 border-b border-white w-6"></div>
                            <p className="pl-4 text-white font-medium font-raleway">
                                Closed
                            </p>
                        </li>
                        <li className="flex gap-2 items-center justify-center">
                            <p className="px-2 text-white font-raleway font-medium">
                                Sunday
                            </p>
                            <div className="pt-2 border-b border-white w-6"></div>
                            <p className="pl-4 text-white font-medium font-raleway">
                                Closed
                            </p>
                        </li>
                    </ul>

                <div className="flex items-center gap-2 pt-4 text-sm">
                    <header className="text-xl font-helvetica text-white font-semibold ">
                        Follow Us:
                    </header>

                </div>
                </div>
                <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
                    <header className="text-xl text-white font-helvetica font-semibold border-b-4 px-4 pb-1">
                        Quick Links
                    </header>
                    <Link className="text-white text-lg" to={"/"}>Home</Link>
                    <Link className="text-white text-lg" to={"/contact"}>Contact</Link>
                    <Link className="text-white text-lg" to={"/about"}>About</Link>
                    <Link className="text-white text-lg" to={"/gallery"}>Gallery</Link>
                </div>
            </div>
        </div>
    </div>
    )
}
