import { Banner } from "@/components/Banner";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router-dom";


export function Contact() {
    return (
        <>
            <Banner title="Come see us, or give us a call and we will get back to you."  style="" image="/assets/images/ContactBanner.png" />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex items-center justify-center m-10 w-full h-full">
                    <div className=" flex flex-col-reverse relative xl:w-5/6 w-full mx- xl:mx-0 h-full ">
                        <img
                            src="/assets/images/ContactBackground.png"
                            className="absolute inset-0 w-full h-full object-cover rounded"
                            alt="Contact Background"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
                        <div className="flex lg:flex-row flex-col justify-center py-10 items-center">
                            {/* <div className="flex flex-col justify-center lg:w-6/12 md:w-8/12 w-full px-4 items-center z-50 lg:border-b-0 border-b-2 lg:border-r-2 border-r-0 border-gray-400">
                                <img
                                    src="/assets/images/TreeFarmLogo.jpg"
                                    className="relative z-50 max-w-xs max-h-xs p-4 rounded-full"
                                    alt="Tree Farm Logo"
                                />
                            <form className='flex flex-col xl:w-5/6 w-full gap-y-2 mt-4 z-50'>
                                <input type='text' name='user_name' placeholder='Enter your name' className='p-2 z-50 rounded mt-4 border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                                <input type='text' name='user_email' placeholder='Enter your email' className='rounded z-50 my-4 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                                <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 z-50 bg-white border-2 border-gray-300 rounded text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300'></textarea>
                                <button className='text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300'>
                                Let's Talk
                                </button>
                            </form>
                        </div> */}
                        <div className="flex flex-col w-6/12 justify-center items-center z-40 pt-10 lg:pt-0">
                            <Link className=" px-4 w-[420px]" to={"https://www.google.com/maps/place/10125+Troy+Pike,+Versailles,+KY+40383/@37.9208116,-84.7060002,17z/data=!4m5!3m4!1s0x884263c2d4e2837b:0xaea619bac66ffc8a!8m2!3d37.92106!4d-84.7007703?entry=ttu"}>
                            <img
                            src="/assets/images/NelsonLeeMap.JPG"
                            alt="Google Map"
                            className=" w-full h-full rounded-lg cursor-pointer hover:scale-110 transition"
                            />
                            </Link>
                            <div className="flex flex-col mt-10">
                                <div className="flex lg:flex-row flex-col  gap-x-10  ">
                                    <div className="flex flex-col lg:items-start items-center justify-center">
                                        <h1 className="text-white z-50 font-playwrite text-2xl">Address</h1>
                                        <p className="text-white z-50 text-lg lg:text-start font-raleway " >10125 Troy Pike, Versailles KY, 40383 </p>
                                    </div>
                                    <div className="flex flex-col lg:items-start items-center justify-center">
                                        <h1 className="text-white z-50 text-2xl">Contacts</h1>
                                        <p className="text-white z-50 text-lg lg:text-start text-center font-raleway">Phone: (614) 725-5620</p>
                                        <p className="text-white z-50 text-lg lg:text-start text-center whitespace-nowrap font-raleway">Email: Nelsonleetreefarm@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex lg:flex-row flex-col justify-center gap-x-14 items-center lg:justify-start lg:items-start mt-6">
                                    <div className="flex flex-col lg:items-start items-center justify-center">
                                        <h1 className="text-white z-50 text-2xl pb-2">Hours</h1>
                                        <p className="text-white z-50 text-lg font-raleway">Monday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">8:00am - 5:00pm</span>
                                        </p>
                                        <p className="text-white z-50 text-lg font-raleway">Tuesday:
                                            {" "}
                                            <span className="text-white z-50 text-base text-center font-raleway">8:00am - 5:00pm</span>
                                        </p>
                                        <p className="text-white z-50 text-lg lg:text-start text-center font-raleway whitespace-nowrap">Wednesday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">Closed</span>
                                        </p>
                                        <p className="text-white z-50 text-lg font-raleway">Thursday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">8:00am - 5:30pm</span>
                                        </p>
                                        <p className="text-white z-50 text-lg font-raleway">Friday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">8:00am - 5:30pm</span>
                                        </p>
                                        <p className="text-white z-50 text-lg font-raleway">Saturday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">8:00am - 5:00pm</span>
                                        </p>
                                        <p className="text-white z-50 text-lg font-raleway">Sunday:
                                            {" "}
                                            <span className="text-white z-50 text-base font-raleway">1:00pm - 5:00pm</span>
                                        </p>
                                        <p className="text-lg  font-medium text-center md:text-left text-red-500 font-raleway">Hours subject to change based on Seasonal times & conditions!</p>
                                    </div>
                                    <div className="flex flex-col lg:items-start items-center justify-center pt-4">
                                        <h1 className="text-white z-50 text-2xl text-center font-playwrite whitespace-nowrap">Follow Us:</h1>
                                        <a href="/" className="z-50">
                                            <p className="text-white flex justify-center items-center">
                                                <TiSocialFacebookCircular size={70} />
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
