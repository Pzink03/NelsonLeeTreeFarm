import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function Test() {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center py-[65px] gap-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl gap-2">
        {/* Left Side */}
        <div className=" w-full flex flex-col  gap-y-12 items-start justify-between">
          <header className="w-full  md:pr-12 h-fit flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start">
              <h2 className="md:pb-4 font-bold text-2xl md:text-3xl font-playwrite text-black">
                Appointment Request For A Photo Session
              </h2>
              <p className="text-lg font-normal pb-4">
                We’re happy to offer our property as a location for photography
                sessions. Please fill out this inquiry form with details about
                your shoot, including preferred dates and the type of session
                you’re planning. This form is for inquiries only and does not
                guarantee availability or reserve a time. Our team will follow
                up with next steps and pricing information.
              </p>

              {/* <ul className="flex flex-col justify-start w-full gap-y-4">
                <form
                  onSubmit={" "}
                  className="flex font-raleway flex-col xl:w-4/6 w-full mt-4 z-10"
                >
                  <p className="font-bold">Your Name & Business Name *</p>
                  <input
                    required
                    type="text"
                    name="first_name"
                    placeholder="Please enter your first and last name"
                    className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <p className="font-bold pt-4">Email *</p>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <p className="font-bold pt-4">Phone Number *</p>
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Please enter your phone number"
                    className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <p className="font-bold pt-4">Date Requested*</p>
                  <input
                    required
                    type="date"
                    name="date"
                    placeholder="Please enter todays date"
                    className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <p className="font-bold pt-4">Time *</p>
                  <div className="flex justify-start items-center">
                    <input
                      type="time"
                      name="start_time"
                      placeholder="Please enter your billing address"
                      className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                    />
                    <span className="text-lg px-2">-</span>
                    <input
                      type="time"
                      name="end_time"
                      placeholder="Please enter your billing address"
                      className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                    />
                  </div>

                  <button className="text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-24 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300">
                    Submit
                  </button>
                </form>
              </ul> */}
            </div>
          </header>
          <div className="w-full">
            <img
              src="/assets/images/NLTF 1.png"
              className="rounded-lg w-full md:max-h-[300px] max-h-[250px] object-cover object-top"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full flex items-stretch justify-center gap-2">
          {/* 3 card stack */}
          <div className="flex flex-col md:w-[57%] w-[37%] gap-2">
            <div className="w-full md:h-[465px] h-[175px]">
              <img
                src="/assets/images/NLTF 2.png"
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="w-full md:h-[325px] h-[130px]">
              <img
                src="/assets/images/NLTF 4.png"
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col text-center gap-2 p-2 bg-secondary-darkgreen rounded-lg justify-center items-center md:h-[325px] h-full">
              <p className="font-semibold md:text-xl text-lg text-white">
                Looking for something else?
              </p>

              <Link to={"/pricing"} className="px-4">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="bg-transparent  text-white px-2"
                >
                  View Inventory
                </Button>
              </Link>
            </div>
          </div>

          {/* 2 card stack */}
          <div className="flex flex-col w-full h-full gap-2">
            <div className="w-full md:h-[580px] h-[250px]">
              <img
                src="/assets/images/NLTF 3.png"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex h-full justify-center items-center bg-stone-200 rounded-lg">
              <img
                src="/assets/images/TreeFarmLogo.jpg"
                className="md:w-[310px] md:h-[310px] w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
