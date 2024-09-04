import { Banner } from "@/components/Banner";
// import { Header } from "@/components/Header";
import { HandshakeIcon,  NotebookPenIcon,  TreePine } from "lucide-react";
// import { FaLocationDot } from "react-icons/fa6";
import { TbGardenCart, TbTruckDelivery } from "react-icons/tb";

export function About(){

    const frequentlyAskedQuestions = [
        // {
        //     id: 1,
        //     title: 'what payment do you accept?qwegqwegqwegqweg',
        //     response: 'asdgsadg assdfg dgasgasd gasfdg',
        //     child: (
        //         <>
        //             <DollarSign size={70} color="green" />
        //         </>
        //     ),
        // },
        {
            id: 2,
            title: 'Do you offer delivery?',
            response: 'At Nelson Lee Tree Farm, we currently do not offer delivery services. However, we would be happy to assist you in selecting and preparing your purchase for easy transport.',
            child: (
                <>
                    <TbTruckDelivery size={70} color="orange" />
                </>
            ),
        },
        {
            id: 3,
            title: 'What types of trees and plants do you offer?',
            response: 'We specialize in trees and plants that are well-suited for our local climate. Whether you’re looking for shade trees, ornamental plants, or native species, we have something for every garden or landscape.',
            child: (
                <>
                    <TreePine size={70} color="green"/>
                </>
            ),
        },
        {
            id: 4,
            title: 'How do you ensure sustainability in your practices?',
            response: 'We follow eco-friendly practices such as water conservation, using organic fertilizers, and promoting biodiversity. We’re committed to reducing our environmental footprint while providing top-quality products.',
            child: (
                <>
                    <HandshakeIcon size={70} color="black" />
                </>
            ),
        },


        {
            id: 8,
            title: 'Can you help with landscaping advice?',
            response: 'While we do have experience in construction and gardening, and some knowledge in landscaping, we do not consider ourselves professional landscapers. We’d be happy to provide you with general advice based on our experience, but please note that it is not from a professional landscaper.',
            child: (
                <>
                    <TbGardenCart size={70} color="red" />
                </>
            ),
        },
        {
            id: 9,
            title: 'How can I place an order?',
            response: 'You can place an order by contacting us directly at our farm, via phone, or email. We’re here to make the process as easy as possible.',
            child: (
                <>
                    <NotebookPenIcon size={70} color="blue"/>
                </>
            ),
        },
        // {
        //     id: 10,
        //     title: 'qwegqwegqwegwe',
        //     response: 'asd fasas FASD SADF ASDFG ',
        //     child: (
        //         <>
        //             <TreePine size={70} color="green" />
        //         </>
        //     ),
        // },
        // {
        //     id: 11,
        //     title: 'qwregqwergqwerg',
        //     response: 'dsfgsdfgsdfg dsfgsdfg sdfgsd fsdfg sdfg',
        //     child: (
        //         <>
        //             <Clock size={70} color="blue"/>
        //         </>
        //     ),
        // }
    ]

    return (
        <>
            <Banner title={"Family Owned and Operated"} image="/assets/images/MainPic.png" subtitle="Nelson Lee Tree Farm is rooted in Kentucky, providing trees and plants that thrive in our climate. As a family-owned business, we’re passionate about nurturing the environment and helping our community grow. Our sustainable practices ensure that every tree, plant, and product we offer not only beautifies your space but also contributes to a greener, healthier world." />
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-7xl">
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 mt-10 flex flex-col bg-secondary-green md:p-10 p-4 lg:flex-row max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/GalleryImage1.jpg'
                            className=" w-[350px] h-[450px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                                    <header className="text-3xl font-playwrite font-base border-b-4 border-primary-green pb-1 mb-4">
                                    Meet the Owners
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    The owners/managers of Nelson Lee Tree Farm, LLC are local, originally from Lexington, Kentucky, eventually transplanting to Southern Woodford County where they now find themselves deeply rooted on a 30+ acre farm on the corner of Troy Pike (Hwy 33) and Cummins Ferry Road.
<br></br>
<br></br>
What began as a dream, a vision, lots of prayer, moments of uncertainty and admittedly some doubt, the tree farm turned into a reality with lots of hard work and the blessings of God!
<br></br>
<br></br>
The owner has worked in a few of the local garden centers over the years and on his previous mini-farm, planted and maintained various trees and shrubs while managing vegetable gardens with modest success. This tree farm is a new kind of business, but he has significant experience in other business ventures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="my-11 pb-2 text-center border-b-4 border-primary-green md:text-3xl text-xl font-medium">Frequently Asked Questions</h1>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] w-full md:max-w-6xl">
                    {frequentlyAskedQuestions.map((question) => (
                        <li key={question.id} className="py-10 md:p-10 gap-2 border-b-2 odd:border-r-2 flex flex-col justify-start items-center">
                            <div className=" rounded-full p-4" >
                                {question.child}
                            </div>
                            <h1 className="text-2xl text-center font-semibold">
                                {question.title}
                            </h1>
                            <p className="text-lg text-gray-500">
                                {question.response}
                            </p>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
