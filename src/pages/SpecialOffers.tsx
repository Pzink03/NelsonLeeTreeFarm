import { Banner } from "@/components/Banner"
import { ICON_LINKS } from "@/constants/data"

export default function SpecialOffer() {
  return (
    <>
      <Banner
        title="Special Offers"
        image="/assets/images/GalleryImage15.jpg"
        subtitle="Follow us on Facebook and visit our website regularly for the latest deals and promotions!"
      />
      <div className="w-full">
        <header className="flex flex-col justify-center items-center mt-10 py-4">
          <h1 className="pb-2 font-helvetica text-2xl md:text-4xl">
            Nelson Lee Tree Farm
          </h1>
          <h3 className="border-b-2 text-center border-secondary-darkgreen text-xl md:text-2xl px-4 pb-2">
            If you have any questions please reach out to us!
          </h3>
          <ul className="flex flex-col md:flex-row justify-center items-start gap-2 text-lg pt-2">
            {ICON_LINKS.map(({ id, child, style, text, href }) => (
              <li
                key={id}
                className="hover:bg-secondary-green hover:scale-105 transition rounded-full duration-300 hover:cursor-pointer"
              >
                <a
                  href={href}
                  className={
                    "flex gap-2 items-center justify-center" + " " + style
                  }
                >
                  <p className="text-white flex justify-center items-center bg-secondary-darkgreen rounded-full w-7 h-7 md:w-10 md:h-10">
                    {" "}
                    {child}
                  </p>
                  <p className="px-2 text-black font-medium font-raleway">
                    {text}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </header>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/assets/images/NLTFPromo.JPG"
            className="w-full max-w-5xl h-full"
            alt="promo"
          />
        </div>
      </div>
    </>
  )
}
