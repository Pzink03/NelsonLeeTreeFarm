import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()

  const links = [
    {
      id: 1,
      link: "/",
      title: "home",
    },
    {
      id: 2,
      link: "/about",
      title: "about",
    },
    {
      id: 3,
      link: "/gallery",
      title: "gallery",
    },
    {
      id: 4,
      link: "/contact",
      title: "contact",
    },
    {
      id: 5,
      link: "/specialOffers",
      title: "Special Offers",
    },
    // {
    //   id: 6,
    //   link: "/photographers",
    //   title: "For Photographers",
    // },
    // {
    //   id: 7,
    //   link: "/specialOffers",
    //   title: "Special Offers",
    // },

    // {
    //   id: 6,
    //   link: "/christmasPage",
    //   title: "Christmas Trees",
    // },
    // {
    //   id: 6,
    //   link: "/specialEvents",
    //   title: "Special Events",
    // },
    {
      id: 8,
      link: "/pricing",
      title: "Pricing & Availability",
    },
    {
      id: 9,
      link: "/preorder",
      title: "Pre-order",
    },
  ]
  return (
    <div className="flex font-helvetica justify-between z-50 shadow-lg items-center w-full h-24 text-primary-green bg-secondary-green fixed pr-2 ">
      <div className="w-20 h-20 lg:hidden">
        <img src="/assets/images/TreeFarmLogo.jpg" alt="Logo" className="" />
      </div>
      <div className="w-24 h-24 hidden lg:flex ">
        <img src="/assets/images/TreeFarmLogo.jpg" alt="Logo" className="" />
      </div>

      <div className="flex ">
        <ul className="hidden text-primary-green lg:flex gap-4">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className={`p-2 cursor-pointer capitalize font-bold text-md hover:text-gray-400 ${
                location.pathname === `${link}` ||
                location.pathname.startsWith(`${link}/`)
                  ? "text-secondary-darkgreen border-b-4 border-secondary-darkgreen"
                  : ""
              }`}
            >
              <Link onClick={() => setIsActive(!isActive)} to={`${link}`}>
                {title}
              </Link>
            </li>
          ))}
          {/* <DropDown /> */}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-10 z-50 lg:hidden"
      >
        {nav ? (
          <FaTimes size={30} />
        ) : (
          <FaBars size={30} style={{ color: "#4E7B5E" }} />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center z-70 items-center absolute p-10 top-0 left-0 w-full h-screen bg-secondary-green">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer text-nowrap capitalize py-4 text-2xl"
            >
              <div onClick={() => setNav(false)}>
                <Link
                  to={`${link}`}
                  className={`${
                    location.pathname === `${link}`
                      ? "text-secondary-darkgreen border-b-4 border-secondary-darkgreen"
                      : ""
                  }`}
                >
                  {title}
                </Link>
              </div>
            </li>
          ))}
          {/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <div
                onClick={() => setNav(false)}
              >
                <Link to='/services' className={`${location.pathname === '/services' ? 'text-blue-500 border-b-4': ''}`}>
                Services
              </Link>
              </div>
          </li> */}
        </ul>
      )}
      {/* { isOpen && (
        <div className="bg-white p-4 w-52 absolute top-16 right-10">
          <Link>Services</Link>
            <ul>
                {menus.map((menu) => (
                    <li onClick={() => setIsOpen(false)} className="p-2 text-lg cursor-pointer rounded" key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
        )} */}
    </div>
  )
}

export default Navbar
