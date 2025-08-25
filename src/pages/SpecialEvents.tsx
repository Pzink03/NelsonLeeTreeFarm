import { Banner } from "@/components/Banner"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const chiliCookoffInfo = {
  location: "Nelson Lee Tree Farm, 10125 Troy Pk, Versailles KY 40383",
  date: "Saturday, November 1st, 2025",
  time: "Arrive & set up 4:00 p.m.; Judging begins 4:45",
  info: "$5 Entry Fee! Prepare enough chili for 15-20 people. Patrons will be charged $1/bowl by NLTF.",
  itemsToBring:
    "Tent (optional), table, chair (for you!), ladle, side items of your preference (e.g., crackers, cheese, sour cream, etc.)",
  weProvide: "Bowls, spoons, napkins",
}

export function SpecialEvents() {
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
        title={"Special Events"}
        style=""
        image="/assets/images/Sustainability.JPG"
        subtitle="Chili Cook-Off 2025!"
      />

      <div className="flex flex-col justify-center w-full px-4 items-center z-10 ">
        <header className="text-center font-playwrite items-center justify-center flex flex-col mt-10">
          <h1 className="text-3xl md:text-4xl text-primary-green font-semibold">
            - Fill Out The Entry Form Below To Enter -
          </h1>
          <img
            src="assets/images/ChiliCookoff2025.jpg"
            alt="Chili CookOff"
            className="md:w-[500px] h-full w-full md:h-[700px] py-4"
          />
          {/* <h3 className="text-xl text-red-500">
            1st Prize $250; 2nd Prize $100; 3rd Prize $50; Remaining Entries -
            Gift Certificates
          </h3> */}
        </header>
        <section className="flex flex-col gap-4 w-full max-w-7xl">
          <h1 className="bg-red-500 w-full text-2xl md:text-left font-playwrite text-center text-white mt-10 p-2">
            Rules And General Info
          </h1>
          <div className="text-lg flex flex-col md:px-4 px-0 md:gap-10 font-raleway gap-4">
            <div className="flex flex-col md:flex-row md:gap-16">
              <p className="font-bold">Location:</p>
              <p className="underline pl-5">{chiliCookoffInfo.location}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-24 ">
              <p className="font-bold">Date:</p>
              <p className="underline pl-5">{chiliCookoffInfo.date}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-24 ">
              <p className="font-bold">Time:</p>
              <p className="pl-4 underline">{chiliCookoffInfo.time}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16 gap-2  ">
              <p className="font-bold">Info/Rules:</p>
              <p className="underline pl-2">{chiliCookoffInfo.info}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 gap-2 ">
              <p className="font-bold">Items to Bring:</p>
              <p className="underline">{chiliCookoffInfo.itemsToBring}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16 gap-2 ">
              <p className="font-bold">We Provide:</p>
              <p className="underline">{chiliCookoffInfo.weProvide}</p>
            </div>
          </div>
        </section>
        <h1 className="bg-red-500 text-2xl text-white w-full md:text-left text-center max-w-7xl mt-10 p-2 font-playwrite">
          Provide us some information about you and your chili. For judges to
          identify please give it a name
        </h1>
        <form
          onSubmit={sendEmail}
          className="flex font-raleway flex-col xl:w-4/6 w-full mt-4 z-10"
        >
          <p className="font-bold">Name</p>
          <input
            type="text"
            name="first_name"
            placeholder="Please enter your first and last name"
            className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
          />
          <p className="font-bold pt-4">Phone Number</p>
          <input
            type="text"
            name="last_name"
            placeholder="Please enter your phone number"
            className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
          />
          <p className="font-bold pt-4">Name Of Your Chili</p>
          <input
            type="text"
            name="chili_name"
            placeholder="Please enter the name of your chili"
            className="p-2 z-50 rounded border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
          />
          <p className="font-bold pt-4">Email</p>
          <input
            type="text"
            name="reply_to"
            placeholder="Please enter your email"
            className="rounded z-50 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300"
          />
          <p className="text-2xl font-bold flex flex-col pt-4 justify-center items-center md:flex-row md:items-end md:justify-start">
            Advisories
            <span className="text-red-500 text-lg font-semibold px-2">
              Please mark all that apply
            </span>
          </p>
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-xl font-bold">Spiciness</p>
            <label>
              <input
                type="checkbox"
                name="spiciness"
                id="extraHotID"
                value="Extra Hot"
              />{" "}
              Extra Hot
            </label>
            <label>
              <input type="checkbox" name="spiciness" id="hotID" value="Hot" />{" "}
              Hot
            </label>
            <label>
              <input
                type="checkbox"
                name="spiciness"
                id="mediumID"
                value="Medium"
              />{" "}
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                name="spiciness"
                id="mildID"
                value="Mild/Wimpy"
              />{" "}
              Mild/Wimpy
            </label>
          </div>

          {/* Dietary Preferences */}
          <div className="flex flex-col font-semibold gap-2">
            <p className="text-xl font-bold">Dietary Preferences</p>
            <label>
              <input
                type="checkbox"
                name="dietary"
                id="vegetarianID"
                value="Vegetarian"
              />{" "}
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                name="dietary"
                id="veganID"
                value="Vegan"
              />{" "}
              Vegan
            </label>
          </div>

          {/* Contains Allergens */}
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-xl font-bold">Contains</p>
            <label>
              <input type="checkbox" name="contains" id="nutsID" value="Nuts" />{" "}
              Nuts
            </label>
            <label>
              <input
                type="checkbox"
                name="contains"
                id="peanutButterID"
                value="Peanut butter"
              />{" "}
              Peanut butter
            </label>
            <label>
              <input
                type="checkbox"
                name="contains"
                id="dairyID"
                value="Dairy"
              />{" "}
              Dairy
            </label>
          </div>
          {/* <p className="text-center text-sm md:text-base md:text-left font-semibold bg-yellow-300">
                            RETURN THIS FORM NO LATER THAN OCTOBER 12 VIA MAIL, EMAIL (NELSONLEETREEFARM@GMAIL.COM), OR FILL
                            OUT FORM ON WEBSITE (WWW.NELSONLEETREEFARMLLC.COM)
                            </p> */}

          <button className="text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300">
            Submit
          </button>
        </form>
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black z-50 bg-opacity-30 flex justify-center items-center">
          <div className="bg-secondary-green p-5 w-80 h-56 rounded-xl flex flex-col items-center justify-between shadow-lg">
            <p className="text-center font-bold">Message successfully sent! </p>
            <p className="text-center">
              Thanks for submitting your info! We will be in contact to confirm
              details about the event.
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
