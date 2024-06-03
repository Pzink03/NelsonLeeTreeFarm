type BannerProps = {
    title?: string,
    subtitle?: string,
    image?: string,
    style?: string,
}

export function Banner({title, subtitle, image, style}: BannerProps){
    return (
    <div className="w-full flex justify-center h-full mt-14 relative shadow-2xl">
            <img
            src={image}
            className={`h-full object-cover lg:object-center object-bottom w-full absolute ${style}`}
            />
            <div className="absolute inset-0 bg-black opacity-40 h-full"></div>
            <div className="max-w-lg font-helvetica md:max-w-5xl h-96 gap-4 pt-[150px] md:pt-[175px] flex flex-col justify-center items-center z-40">
                <h1 className="z-50 text-white border-b-2 border-gray-400 py-1 font-black text-2xl md:text-4xl text-center">
                {title}
                </h1>
                <p className="text-xl font-raleway md:text-3xl font-bold w-5/6 md:1/2 text-gray-200 text-center ">
                {subtitle}
                </p>
            </div>
        </div>
    )
}
