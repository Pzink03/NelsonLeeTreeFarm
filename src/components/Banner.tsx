import { useLocation } from "react-router-dom"

type BannerProps = {
    title?: string,
    subtitle?: JSX.Element,
    image?: string,
    style?: string,
}

export function Banner({title, subtitle, image, style}: BannerProps){

    const location = useLocation()

    return (
    <div className={`w-full flex justify-center mt-14 relative shadow-2xl ${style}`}>
            <img
            src={image}
            className={`h-full object-cover lg:object-center object-bottom w-full absolute ${style}`}
            />
            <div className={`absolute inset-0 bg-black opacity-40 h-full ${style}`}></div>
            <div className={`max-w-lg font-helvetica md:max-w-5xl h-96 gap-4 pt-[150px] ${location.pathname === '/' ? 'md:pt-[600px]' : ''}  flex flex-col justify-center items-center z-40`}>
                <h1 className="z-50 text-white font-black text-2xl md:text-5xl text-center">
                {title}
                </h1>
                <div className="pt-8">
                {subtitle}
                </div>
            </div>
        </div>
    )
}
