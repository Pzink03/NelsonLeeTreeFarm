import { Banner } from "@/components/Banner"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { ICON_LINKS } from "@/constants/data"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function PreorderForm() {
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
        "d6s1EmHoFuFDjW5wY"
      )
      .then(
        (result) => {
          console.log(result.text)
          setShowSuccessMessage(true)
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )

    // Reset the form after submission
    e.currentTarget.reset()
  }
  return (
    <>
      <Banner
        title={"Pre-order Inquiry"}
        style=""
        image="/assets/images/Sustainability.JPG"
        subtitle="10125 Troy Pike, Versailles KY 40383"
      />

      <div className="flex flex-col justify-center w-full px-4 items-center z-10 ">
        <header className="flex flex-col justify-center items-center text-center pt-16">
          <h1 className="flex text-2xl md:text-3xl capitalize font-playwrite mb-4 max-w-2xl font-semibold">
            Let us know what you're looking for!
          </h1>
          <p className="flex md:text-lg max-w-2xl">
            Inquire about products currently available in our inventory or to
            ask about specific varieties you’re interested in that may not be
            listed. If we don’t have a tree in stock, we still may be able to
            get it for you. Please note that submitting this form does not place
            an order or reserve a tree. Once we receive your inquiry, we will
            follow up to confirm availability, pricing, and next steps.
          </p>

          <div className="py-10 w-2/3">
            <Link to="/pricing" className="p-2">
              <Button className="w-full bg-secondary-darkgreen hover:scale-110 transition ease-in-out font-semibold text-base duration-300 hover:bg-secondary-green hover:text-secondary-darkgreen hover:border-secondary-darkgreen hover:border-2">
                View Inventory
              </Button>
            </Link>
          </div>
        </header>
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
          <p className="font-bold">Email *</p>
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
          <p className="font-bold pt-4">Bill To *</p>
          <input
            type="text"
            name="billing"
            placeholder="Please enter your billing address"
            className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
          />
          <p className="text-2xl font-bold flex flex-col pt-4 justify-center items-center md:flex-row md:items-end md:justify-start">
            Ship To:
          </p>
          <div className="flex flex-col gap-2 font-semibold">
            <label>
              <input
                type="checkbox"
                name="delivery"
                id="delivery"
                value="Delivery"
              />{" "}
              Delivery
            </label>
            <label>
              <input
                type="checkbox"
                name="delivery"
                id="pickup"
                value="Pickup"
              />{" "}
              Pick Up
            </label>
            <p className="font-bold pt-4">
              If you are requesting shipping, enter your shipping address
            </p>
            <input
              type="text"
              name="shipping"
              placeholder="Please enter your shipping address"
              className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
            />
          </div>
          <div className="flex flex-col font-semibold md:gap-4 gap-10 pt-24">
            <h2 className="text-2xl pb-4">What can we help you with?</h2>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  required
                  type="text"
                  name="product1"
                  placeholder="Please enter the product name"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  required
                  type="number"
                  name="number1"
                  id="number1"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product2"
                  placeholder="Please enter the product name"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number2"
                  id="number2"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product3"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number3"
                  id="number3"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product4"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number4"
                  id="number4"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product5"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number5"
                  id="number5"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product6"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number6"
                  id="number6"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product7"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number7"
                  id="number7"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start gap-x-8 items-end">
              <label className="w-full">
                <p>Product Name</p>
                <input
                  name="product8"
                  placeholder="Please enter your billing address"
                  className="rounded z-50 p-2 w-full border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />
              </label>
              <label className="flex flex-col w-full">
                <p>How Many?</p>
                <input
                  type="number"
                  name="number8"
                  id="number8"
                  defaultValue={0}
                  className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
                />{" "}
              </label>
            </div>
          </div>

          <button className="text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-24 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300">
            Submit
          </button>
        </form>
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
