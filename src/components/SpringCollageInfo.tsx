import { ICON_LINKS } from "@/constants/data"

import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export default function SpringCollageInfo() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center pt-20">
        <header className="flex flex-col justify-center items-center text-center ">
          <h1 className="flex text-2xl md:text-3xl capitalize font-playwrite mb-4 max-w-2xl font-semibold">
            Christmas Is Here!
          </h1>
          <p className="flex md:text-lg max-w-2xl">
            Visit Nelson Lee Tree Farm for all your holiday essentials, and
            discover how our Christmas tree rental program can make your season
            even brighter.
          </p>
          <p>Click the button below to learn more.</p>
          <div className="py-10 w-2/3">
            <Link to="/christmasPage" className="p-2">
              <Button className="w-full bg-secondary-darkgreen hover:scale-110 transition ease-in-out font-semibold text-base duration-300 hover:bg-secondary-green hover:text-secondary-darkgreen hover:border-secondary-darkgreen hover:border-2">
                View More Details
              </Button>
            </Link>
          </div>
        </header>
        <div className="flex max-w-4xl gap-x-10">
          <img
            src="/assets/images/PromoFlyer.png"
            className="md:h-[800px] md:w-[800px] h-full w-full "
          />
          {/* <div className="flex flex-col justify-center">
            <h1 className="font-helvetica font-semibold text-2xl border-b-2 ">
            Spring is Here
            </h1>
            <p className="flex justify-center font-raleway">
            Spring is here. Come out and see us. We are always adding new
            inventory so please call us if you're looking for anyhting in
            particular.
            </p>
            </div> */}
        </div>
        <ul className="flex flex-col md:flex-row justify-center items-start gap-2 text-lg py-2">
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
      </div>
    </>
  )
}
