import { TiSocialFacebookCircular } from "react-icons/ti"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <div className="w-full h-full py-6 bg-secondary-green">
      <div className=" ">
        <p className=" font-playwrite text-xl text-center font-semibold text-black">
          Still have questions? Don't hesitate to get in contact with us
        </p>
        <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-4 md:gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/Treefarmlogo2.svg"
              className="w-64 h-auto md:pl-12"
            />
            <div className="flex">
              <img
                src="/assets/images/BBBlogo.png"
                className="w-44 h-28 pt-6 justify-items-center"
              />
              <img
                src="/assets/images/KYproud.png "
                className="w-56 h-32 justify-items-center bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
            <div className="flex flex-col text-black text-lg items-center justify-center">
              <h1 className="text-xl text-black font-semibold border-b-4 border-primary-green px-4 pb-1 mb-1 font-playwrite ">
                Contacts
              </h1>
              <p className=" font-raleway px-2 black font-medium">
                Phone: (859) 300-1249 | (859) 433-0095
              </p>
              <p className=" font-raleway px-2 black font-medium">
                Email: Nelsonleetreefarm@gmail.com
              </p>
              <p className=" font-raleway px-2 black font-medium">
                Address: 10125 Troy Pike, Versailles KY, 40383{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 text-sm">
              <header className="text-xl font-playwrite text-black font-semibold ">
                Follow Us:
              </header>
              <Link to="https://www.facebook.com/profile.php?id=61553405142887">
                <p className="text-white flex justify-center items-center">
                  <TiSocialFacebookCircular color="black" size={70} />
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-col text-sm pt-4">
            <header className="text-xl font-playwrite text-center text-black border-primary-green font-semibold border-b-4 px-4 pb-1 mb-1 ">
              Current Store Hours
            </header>
            <ul className="flex flex-col justify-center text-black  text-lg items-center gap-2">
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Monday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  Closed (Call if you need to make an appointment. We are on the
                  property.)
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Tuesday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  8:00am - 1:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center  justify-center">
                <p className="font-raleway px-2 black font-medium">Wednesday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className=" font-medium font-raleway pr-8">
                  8:00am - 1:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Thursday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  8:00am - 1:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className=" pr-3 font-raleway font-medium">Friday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="pl-4 font-medium font-raleway">8:00am - 1:00pm</p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="px-2 font-raleway font-medium">Saturday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className=" px-8 pl-4 font-medium font-raleway">
                  8:00am - 1:00pm
                </p>
              </li>
              <li className="flex  gap-2 items-center justify-center">
                <p className="px-2 font-raleway font-medium">Sunday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-9 font-medium font-raleway">
                  Closed (Call if you need to make an appointment. We are on the
                  property.)
                </p>
              </li>
              <p className="text-base text-center font-medium text-red-500">
                Hours subject to change based on Seasonal times & conditions!
              </p>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
            <header className="text-xl font-playwrite whitespace-nowrap text-black border-primary-green font-semibold border-b-4 px-4 pb-1">
              Quick Links
            </header>
            <Link className="text-black text-lg font-raleway" to={"/"}>
              Home
            </Link>
            <Link className="text-black text-lg font-raleway" to={"/contact"}>
              Contact
            </Link>
            <Link className="text-black text-lg font-raleway" to={"/about"}>
              About
            </Link>
            <Link className="text-black text-lg font-raleway" to={"/gallery"}>
              Gallery
            </Link>
            <Link
              className="text-black text-lg font-raleway"
              to={"/specialOffers"}
            >
              Special Offers
            </Link>
            <Link className="text-black text-lg font-raleway" to={"/pricing"}>
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
