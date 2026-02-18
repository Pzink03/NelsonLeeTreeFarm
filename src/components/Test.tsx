import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function Test() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create a FormData object to gather all the form data
    const formData = new FormData(e.currentTarget)

    // Prepare the data to be sent with emailjs
    const formValues = Object.fromEntries(formData.entries())

    // Convert checkbox selections (can be multiple) into a string for sending
    formValues.spiciness = formData.getAll("spiciness").join(", ")
    formValues.dietary = formData.getAll("dietary").join(", ")
    formValues.contains = formData.getAll("contains").join(", ")

    emailjs
      .send(
        "service_2z5ueh8",
        "template_j22smgt",
        formValues,
        "d6s1EmHoFuFDjW5wY",
      )
      .then(
        (result) => {
          console.log(result.text)
          setShowSuccessMessage(true)
        },
        (error) => {
          console.log("FAILED...", error.text)
        },
      )

    // Reset the form after submission
    e.currentTarget.reset()
  }
  return (
    <>
      <div className="flex flex-col w-full h-fit justify-center items-center py-[65px] gap-10">
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl p-4 gap-2">
          {/* Left Side */}
          <div className=" w-full flex flex-col  gap-y-12 items-start justify-between">
            <header className="w-full  md:pr-12 h-fit flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start">
                <h2 className="md:pb-4 font-bold text-2xl md:text-3xl font-playwrite text-black">
                  Appointment Request For A Photo Session
                </h2>
                <p className="text-lg font-normal pb-4">
                  We’re happy to offer our property as a location for
                  photography sessions. Please fill out this inquiry form with
                  details about your shoot, including preferred dates and the
                  type of session you’re planning. This form is for inquiries
                  only and does not guarantee availability or reserve a time.
                  Our team will follow up with next steps and pricing
                  information.
                </p>
                <form
                  onSubmit={sendEmail}
                  className="flex font-raleway flex-col xl:w-4/6 w-full mt-4 z-10"
                >
                  <p className="font-bold">Name *</p>
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
                  <p className="font-bold pt-4">Date *</p>
                  <input
                    required
                    type="date"
                    name="date"
                    placeholder="Please enter todays date"
                    className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <p className="font-bold pt-4">Request a time *</p>
                  <input
                    type="time"
                    name="time"
                    placeholder="Please request a time"
                    className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                  />
                  <div className="w-full">
                    <button className="text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-24 py-3 my-8 mx-auto rounded hover:scale-110 duration-300">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </header>
            <div className="w-full">
              <img
                src="/assets/images/Plants.jpg"
                className="rounded-lg w-full md:max-h-[300px] max-h-[250px] object-cover object-top"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full flex items-stretch justify-center gap-2">
            {/* 3 card stack */}
            <div className="flex flex-col md:w-[67%] w-[37%] gap-2">
              <div className="w-full md:h-auto h-[175px]">
                <img
                  src="/assets/images/NLTF 3.png"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-full md:h-full h-[130px]">
                <img
                  src="/assets/images/NLTF 4.png"
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col text-center gap-2 p-2 bg-secondary-darkgreen rounded-lg justify-center items-center md:h-full h-full">
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
              <div className="w-full md:h-[780px] h-[350px]">
                <img
                  src="/assets/images/Photographers3.jpg"
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
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black z-50 bg-opacity-30 flex justify-center items-center">
          <div className="bg-secondary-green p-5 w-80 h-56 rounded-xl flex flex-col items-center justify-between shadow-lg">
            <p className="text-center font-bold">Inquiry sent successfully! </p>
            <p className="text-center">
              Thanks for submitting your inquiry! We will review your submission
              and get back to you shortly!
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="mt-4 px-10 py-2 font-semibold bg-primary-green text-white rounded hover:scale-110 transition focus:outline-none"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  )
}
