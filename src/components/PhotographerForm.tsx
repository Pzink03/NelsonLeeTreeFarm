import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function PhotographerForm() {
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
        "template_eo19l3e",
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
      <section className="w-full bg-[#f1f3ed] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* =========================
            PAGE HEADING
        ========================= */}
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-b from-gray-300 to-primary-green sm:w-24" />

              <div className="text-primary-green">🌲</div>

              <div className="h-px w-12 bg-gradient-to-b from-gray-300 to-primary-green sm:w-24" />
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-green sm:text-sm">
              Photography Sessions
            </p>
          </div>

          {/* =========================
            MAIN BENTO
        ========================= */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* =================================
              LEFT COLUMN — INFORMATION + FORM
          ================================= */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              {/* Intro */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Appointment Request
                  <br />
                  <span className="text-primary-green">
                    For A Photo Session
                  </span>
                </h2>

                <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-b from-gray-300 to-primary-green" />

                <div className="mt-5 space-y-4 text-sm leading-6 text-gray-700 sm:text-base">
                  <p>
                    We’re happy to offer our property as a location for
                    photography sessions. Please fill out the form below with
                    details about your shoot, including preferred dates and the
                    type of session you’re planning.
                  </p>

                  <p>
                    This form is for inquiries only and does not guarantee
                    availability or reserve a time slot. Once we review your
                    request, our team will follow up with next steps. Pricing
                    information can be found in the FAQs below.
                  </p>

                  <p className="font-bold text-primary-green">
                    Appointments are confirmed when deposit is received.
                  </p>
                </div>
              </div>

              {/* Calendar CTA */}
              <div className="rounded-2xl border border-primary-green/15 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-green/10 text-xl">
                  📅
                </div>

                <h3 className="font-serif text-2xl font-bold text-primary-green">
                  Planning Your Visit?
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
                  Check our calendar for upcoming events and dates before
                  submitting your booking request.
                </p>

                <a
                  href="#calendar"
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-300 to-primary-green px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  View Event Calendar
                </a>
              </div>

              {/* Form */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-primary-green">
                    Request Your Session
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Please provide the details below.
                  </p>
                </div>

                <form
                  onSubmit={sendEmail}
                  className="flex w-full flex-col font-raleway"
                >
                  {/* Name */}
                  <label className="font-bold text-sm text-gray-800">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    required
                    type="text"
                    name="first_name"
                    placeholder="Please enter your first and last name"
                    className="mt-2 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                  />

                  {/* Email */}
                  <label className="mt-5 font-bold text-sm text-gray-800">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    className="mt-2 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                  />

                  {/* Phone */}
                  <label className="mt-5 font-bold text-sm text-gray-800">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Please enter your phone number"
                    className="mt-2 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                  />

                  {/* Date */}
                  <label className="mt-5 font-bold text-sm text-gray-800">
                    Date <span className="text-red-500">*</span>
                  </label>

                  <input
                    required
                    type="date"
                    name="date"
                    className="mt-2 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 outline-none transition duration-300 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                  />

                  {/* Time explanation */}
                  <p className="mt-5 text-sm font-medium leading-6 text-gray-700">
                    Request a start time and end time so we know how long your
                    session will be.
                  </p>

                  {/* Times */}
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="font-bold text-sm text-gray-800">
                        Start Time <span className="text-red-500">*</span>
                      </label>

                      <input
                        required
                        type="time"
                        name="starttime"
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition duration-300 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-sm text-gray-800">
                        End Time <span className="text-red-500">*</span>
                      </label>

                      <input
                        required
                        type="time"
                        name="endtime"
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition duration-300 hover:border-primary-green focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-7 w-full rounded-lg bg-gradient-to-b from-gray-300 to-primary-green px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Submit Appointment Request
                  </button>
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
                          Cook-Off! We will review your submission and get back
                          to you shortly.
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
            </div>

            {/* =================================
              RIGHT COLUMN — PHOTO BENTO
          ================================= */}
            <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:grid-cols-3">
              {/* Large top image */}
              <div className="group col-span-2 overflow-hidden rounded-2xl lg:col-span-2">
                <img
                  src="/assets/images/Photographers3.jpg"
                  alt="Nelson Lee Tree Farm"
                  className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[300px]"
                />
              </div>

              {/* Small image */}
              <div className="group overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/ServiceCardImage2.jpg"
                  alt="Nelson Lee Tree Farm"
                  className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[300px]"
                />
              </div>

              {/* Tall image */}
              <div className="group row-span-2 overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/NLTF 4.png"
                  alt="Nelson Lee Tree Farm"
                  className="h-full min-h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[500px]"
                />
              </div>

              {/* Middle image */}
              <div className="group overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/Logo.svg"
                  alt="Nelson Lee Tree Farm logo"
                  className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Looking for something else */}
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-secondary-darkgreen p-6 text-center">
                <p className="font-serif text-2xl font-bold text-white">
                  Looking for something else?
                </p>

                <p className="mt-2 text-sm leading-5 text-white/75">
                  Browse our available trees and inventory.
                </p>

                <Link to="/pricing" className="mt-5">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-secondary-darkgreen"
                  >
                    View Inventory
                  </Button>
                </Link>
              </div>

              {/* Bottom wide image */}
              <div className="group col-span-2 overflow-hidden rounded-2xl">
                <img
                  src="/assets/images/Plants.jpg"
                  alt="Nelson Lee Tree Farm"
                  className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
