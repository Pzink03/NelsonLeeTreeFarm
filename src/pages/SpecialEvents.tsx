import { Banner } from "@/components/Banner"
import { useState } from "react"
import emailjs from "@emailjs/browser"

import VendorInfo from "@/components/VendorInfo"

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
      <Banner
        title="Special Events"
        style=""
        image="/assets/images/Sustainability.JPG"
        subtitle="Join us for our 3rd Annual Chili Cook-Off!"
      />
      <div className="flex flex-col justify-center w-full px-4 items-center z-10 ">
        {/* HERO */}
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12 md:px-8">
          <div className="mb-4 text-center">
            <p className="font-raleway text-sm font-semibold uppercase tracking-[0.25em] text-primary-green">
              Nelson Lee Tree Farm
            </p>

            <h1 className="mt-2 font-playwrite text-3xl font-semibold text-primary-green md:text-5xl">
              3rd Annual Chili Cook-Off
            </h1>

            <p className="mt-4 font-raleway text-lg text-gray-600">
              Saturday, October 17th, 2026
            </p>
          </div>

          {/* Cover Image */}
          <div className="mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-lg">
            <img
              src="/assets/images/ChiliCookoffCover.svg"
              alt="Nelson Lee Tree Farm 3rd Annual Chili Cook-Off"
              className="mx-auto h-auto max-h-[650px] w-full object-contain"
            />
          </div>
        </section>

        {/* EVENT DETAILS */}

        {/* RULES */}
        <section className="bg-gray-50 py-14">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <p className="font-raleway text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
                Before You Enter
              </p>

              <h2 className="mt-2 font-playwrite text-3xl text-gray-800 md:text-4xl">
                Rules & General Information
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary-green" />
            </div>
            <div className="grid gap-4 md:grid-cols-3 pb-4">
              {/* Location */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-green text-xl">
                  📍
                </div>

                <h2 className="font-raleway text-sm font-bold uppercase tracking-wider text-gray-500">
                  Location
                </h2>

                <p className="mt-2 font-raleway font-semibold text-gray-800">
                  Nelson Lee Tree Farm
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  10125 Troy Pk
                  <br />
                  Versailles, KY 40383
                </p>
              </div>

              {/* Date */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-green text-xl">
                  📅
                </div>

                <h2 className="font-raleway text-sm font-bold uppercase tracking-wider text-gray-500">
                  Date
                </h2>

                <p className="mt-2 font-raleway font-semibold text-gray-800">
                  Saturday
                </p>

                <p className="mt-1 text-sm text-gray-600">October 17th, 2026</p>
              </div>

              {/* Time */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-green text-xl">
                  🕐
                </div>

                <h2 className="font-raleway text-sm font-bold uppercase tracking-wider text-gray-500">
                  Schedule
                </h2>

                <p className="mt-2 font-raleway font-semibold text-gray-800">
                  Setup: 4:30 PM
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Judging begins at 5:15 PM
                </p>
              </div>
            </div>

            {/* Important Info */}
            <div className="mb-8 rounded-2xl bg-primary-green p-6 text-center shadow-md md:p-8">
              <p className="font-raleway text-sm font-bold uppercase tracking-widest text-white/80">
                Entry Fee
              </p>

              <p className="mt-1 font-playwrite text-4xl font-bold text-white">
                $5
              </p>

              <p className="mx-auto mt-3 max-w-2xl font-raleway text-white/90">
                Prepare enough chili for 15–20 people. Patrons will be charged
                $1 per bowl by Nelson Lee Tree Farm.
              </p>
            </div>

            {/* Bring / Provide */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Bring */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="font-playwrite text-2xl text-primary-green">
                  What to Bring
                </h3>

                <ul className="mt-5 space-y-3 font-raleway text-gray-700">
                  <li>
                    ✓ Tent{" "}
                    <span className="text-sm text-gray-400">(optional)</span>
                  </li>
                  <li>
                    ✓ Surge protector / extension cord{" "}
                    <span className="text-sm text-gray-400">
                      (If you have them)
                    </span>
                  </li>
                  <li>✓ Table</li>
                  <li>
                    ✓ Chair{" "}
                    <span className="text-sm text-gray-400">(for you!)</span>
                  </li>
                  <li>✓ Ladle</li>
                  <li>✓ Side items of your choice</li>
                </ul>

                <p className="mt-5 text-sm text-gray-500">
                  Examples of side items include crackers, cheese, sour cream,
                  and other toppings.
                </p>
              </div>

              {/* Provided */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="font-playwrite text-2xl text-primary-green">
                  We Provide
                </h3>

                <ul className="mt-5 space-y-3 font-raleway text-gray-700">
                  <li>✓ Bowls</li>
                  <li>✓ Spoons</li>
                  <li>✓ Napkins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
            <div className="mb-10 text-center">
              <h2 className="mt-2 font-playwrite text-3xl text-gray-800 md:text-4xl">
                Submit the Form Below to Enter!
              </h2>

              <p className="mx-auto mt-4 max-w-2xl font-raleway text-gray-600">
                Fill out the form below with your information and tell us a
                little about your chili.
              </p>
            </div>

            <form
              onSubmit={sendEmail}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-10"
            >
              {/* Basic Information */}
              <div>
                <h3 className="font-playwrite text-2xl text-primary-green">
                  Your Information
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="mb-2 block font-raleway text-sm font-bold text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      placeholder="First and last name"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-raleway text-gray-800 outline-none transition focus:border-primary-green focus:bg-white focus:ring-2 focus:ring-primary-green/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-raleway text-sm font-bold text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-raleway text-gray-800 outline-none transition focus:border-primary-green focus:bg-white focus:ring-2 focus:ring-primary-green/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chili_name"
                      className="mb-2 block font-raleway text-sm font-bold text-gray-700"
                    >
                      Name of Your Chili
                    </label>

                    <input
                      id="chili_name"
                      type="text"
                      name="chili_name"
                      placeholder="Give your chili a name"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-raleway text-gray-800 outline-none transition focus:border-primary-green focus:bg-white focus:ring-2 focus:ring-primary-green/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reply_to"
                      className="mb-2 block font-raleway text-sm font-bold text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="reply_to"
                      type="email"
                      name="reply_to"
                      placeholder="Email address"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-raleway text-gray-800 outline-none transition focus:border-primary-green focus:bg-white focus:ring-2 focus:ring-primary-green/20"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-200" />

              {/* Advisories */}
              <div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="font-playwrite text-2xl text-primary-green">
                      Chili Details
                    </h3>

                    <p className="mt-1 font-raleway text-sm text-gray-500">
                      Please mark all that apply.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {/* Spiciness */}
                  <div className="rounded-xl bg-gray-50 p-5">
                    <h4 className="font-raleway font-bold text-gray-800">
                      Spiciness
                    </h4>

                    <div className="mt-4 space-y-3">
                      {[
                        ["Extra Hot", "extraHotID"],
                        ["Hot", "hotID"],
                        ["Medium", "mediumID"],
                        ["Mild / Wimpy", "mildID"],
                      ].map(([label, id]) => (
                        <label
                          key={id}
                          htmlFor={id}
                          className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                        >
                          <input
                            type="checkbox"
                            name="spiciness"
                            id={id}
                            value={label}
                            className="h-4 w-4 accent-primary-green"
                          />

                          {label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dietary */}
                  <div className="rounded-xl bg-gray-50 p-5">
                    <h4 className="font-raleway font-bold text-gray-800">
                      Dietary Preferences
                    </h4>

                    <div className="mt-4 space-y-3">
                      <label
                        htmlFor="vegetarianID"
                        className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="dietary"
                          id="vegetarianID"
                          value="Vegetarian"
                          className="h-4 w-4 accent-primary-green"
                        />
                        Vegetarian
                      </label>

                      <label
                        htmlFor="veganID"
                        className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="dietary"
                          id="veganID"
                          value="Vegan"
                          className="h-4 w-4 accent-primary-green"
                        />
                        Vegan
                      </label>
                    </div>
                  </div>

                  {/* Contains */}
                  <div className="rounded-xl bg-gray-50 p-5">
                    <h4 className="font-raleway font-bold text-gray-800">
                      Contains
                    </h4>

                    <div className="mt-4 space-y-3">
                      <label
                        htmlFor="nutsID"
                        className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="contains"
                          id="nutsID"
                          value="Nuts"
                          className="h-4 w-4 accent-primary-green"
                        />
                        Nuts
                      </label>

                      <label
                        htmlFor="peanutButterID"
                        className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="contains"
                          id="peanutButterID"
                          value="Peanut butter"
                          className="h-4 w-4 accent-primary-green"
                        />
                        Peanut butter
                      </label>

                      <label
                        htmlFor="dairyID"
                        className="flex cursor-pointer items-center gap-3 font-raleway text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="contains"
                          id="dairyID"
                          value="Dairy"
                          className="h-4 w-4 accent-primary-green"
                        />
                        Dairy
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10 flex justify-center">
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-b from-gray-300 to-primary-green px-12 py-3 font-raleway font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Submit Entry
                </button>
              </div>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                  <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-green text-2xl">
                      ✓
                    </div>

                    <h3 className="mt-5 font-playwrite text-2xl text-primary-green">
                      Entry Submitted!
                    </h3>

                    <p className="mt-3 font-raleway leading-relaxed text-gray-600">
                      Thanks for entering the Nelson Lee Tree Farm Chili
                      Cook-Off! We will review your submission and get back to
                      you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowSuccessMessage(false)}
                      className="mt-6 rounded-lg bg-primary-green px-10 py-3 font-raleway font-semibold text-white transition hover:bg-green-600"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="flex flex-col bg-secondary-green rounded-lg p-4 justify-center items-center w-full max-w-7xl">
          <VendorInfo />
        </section>
      </div>
    </>
  )
}
