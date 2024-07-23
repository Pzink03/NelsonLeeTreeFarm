import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Clock, DollarSign, TreePine } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

export function About(){

    const frequentlyAskedQuestions = [
        {
            id: 1,
            title: 'what payment do you accept?qwegqwegqwegqweg',
            response: 'asdgsadg assdfg dgasgasd gasfdg',
            child: (
                <>
                    <DollarSign size={70} color="green" />
                </>
            ),
        },
        {
            id: 2,
            title: 'Where are you located?',
            response: 'sdfg sdfg sdfg sdfg dfsdfgsdfgs',
            child: (
                <>
                    <FaLocationDot size={70} color="orange" />
                </>
            ),
        },
        {
            id: 3,
            title: 'qwregqwergqwerg',
            response: 'dsfgsdfgsdfg dsfgsdfg sdfgsd fsdfg sdfg',
            child: (
                <>
                    <Clock size={70} color="blue"/>
                </>
            ),
        },
        {
            id: 4,
            title: 'qwegqwegqwegwe',
            response: 'asd fasas FASD SADF ASDFG ',
            child: (
                <>
                    <TreePine size={70} color="green" />
                </>
            ),
        },


        {
            id: 8,
            title: 'Where are you located?',
            response: 'sdfg sdfg sdfg sdfg dfsdfgsdfgs',
            child: (
                <>
                    <FaLocationDot size={70} color="orange" />
                </>
            ),
        },
        {
            id: 9,
            title: 'qwregqwergqwerg',
            response: 'dsfgsdfgsdfg dsfgsdfg sdfgsd fsdfg sdfg',
            child: (
                <>
                    <Clock size={70} color="blue"/>
                </>
            ),
        },
        {
            id: 10,
            title: 'qwegqwegqwegwe',
            response: 'asd fasas FASD SADF ASDFG ',
            child: (
                <>
                    <TreePine size={70} color="green" />
                </>
            ),
        },
        {
            id: 11,
            title: 'qwregqwergqwerg',
            response: 'dsfgsdfgsdfg dsfgsdfg sdfgsd fsdfg sdfg',
            child: (
                <>
                    <Clock size={70} color="blue"/>
                </>
            ),
        }
    ]

    return (
        <>
            <Banner title={"Family Owned and Operated"} image="/assets/images/MainPic.png" />
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-7xl">
                    <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10" >
                        <div className="gap-10 mt-10 flex flex-col bg-secondary-green md:p-10 p-4 lg:flex-row max-w-7xl items-center lg:items-center">
                            <img
                            src='/assets/images/Evergreens.png'
                            className=" w-[350px] h-[350px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                                    <header className="text-3xl font-helvetica font-base border-b-2  pb-1 mb-4">
                                        Hero Title
                                    </header>
                                    <p className=" pt-10 font-raleway text-center lg:text-left text-xl ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Header title="Frequently Asked Questions" />
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
