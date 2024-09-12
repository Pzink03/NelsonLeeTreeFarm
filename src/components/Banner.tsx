import { useLocation } from "react-router-dom"

type BannerProps = {
    title?: string,
    subtitleButton?: JSX.Element,
    subtitle?: string,
    image?: string,
    style?: string,
}

export function Banner({title, subtitle, subtitleButton, image, style}: BannerProps){

    const location = useLocation()

    return (
        <div className={`w-full flex justify-center relative shadow-2xl px-4 ${style}`}>
            <img
            src={image}
            className={`h-full object-cover lg:object-center object-bottom w-full absolute ${style}`}
            />
            <div className={`absolute inset-0 bg-black opacity-40 h-full ${style}`}></div>
            <div className={`max-w-lg font-helvetica md:max-w-5xl h-full pt-[150px] md:pt-[150px] ${location.pathname === '/' ? 'md:pt-[300px] pt-[150px]' : ''}  flex flex-col justify-center items-center z-40`}>
                <h1 className="z-50 text-white font-black font-playwrite text-3xl md:text-5xl text-center">
                {title}
                </h1>
                <p className="z-50 text-white font-raleway font-bold text-lg md:text-2xl pt-4 text-center">
                {subtitle}
                </p>
                <div className="pt-8 font-raleway">
                {subtitleButton}
                </div>
            {location.pathname === "/" ?
            <>
            <div className="z-40 flex flex-col justify-center items-center ">
            <div className="lg:flex md:pb-10 hidden">
                        <img
                        src="/assets/images/BBBlogo.png"
                        className="w-44 h-24 pt-0 mt-4 justify-items-center"
                        />
                        <img
                        src="/assets/images/KYproud.png "
                        className="w-56 h-32 justify-items-center invert brightness-0 transition"
                        />
                    </div>
            <div className="absolute bottom-0 flex flex-col" >

            <p className="text-white font-raleway my-10 font-semibold text-xl md:text-3xl">See What's In Stock!</p>
            <img
            src="/assets/images/Arrow.svg"
            alt="Arrow Down"
            className="animate-bounce h-16 pb-4"
            />
            </div>
            </div>
            </>
            :
            ""
        }
            </div>
        </div>
    )
}
