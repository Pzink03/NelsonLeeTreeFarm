import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";

export function About(){
    return (
        <>
            <Banner title="Nelson Lee Tree Farm" image="/assets/images/MainPic.png" />
            <div className="flex flex-col justify-center items-center w-full h-full">
                <Header title={"Family Owned and Operated"} />
                <div className="max-w-7xl">
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 flex flex-col bg-gray-100 md:p-10 p-4 lg:flex-row max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/Evergreens.png'
                            className=" w-[350px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                                    <header className="text-3xl font-helvetica font-base border-b-2  pb-1 mb-4">
                                        Evergreens
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    Meet Wayne McKnight, the owner and operator of Quality First, a company he founded 25 years ago and currently manages. Wayne has an impressive 53-year career as an auto technician, beginning when he was just 14 years old. Beyond his professional expertise, he dedicates himself to serving his community through various missions, including feeding and clothing the homeless, participating in disaster relief projects, and earning nominations for the Samaritan's Purse Award. Wayne extends his commitment to community service through his business, ensuring customer care and delivering safe, honest work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
