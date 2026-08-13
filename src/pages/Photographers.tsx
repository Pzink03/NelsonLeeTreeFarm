import { Banner } from "@/components/Banner"
import GoogleCalendar from "@/components/GoogleCalendar"
import { PhotographerForm } from "@/components/PhotographerForm"

export function Photographers() {
  return (
    <>
      <Banner
        title="Book Your Next Photo Session at Nelson Lee Tree Farm"
        image="/assets/images/MainPic.png"
        subtitle="Submit an appointment request below and we’ll follow up with availability and pricing details."
      />

      <PhotographerForm />
      <GoogleCalendar />

      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="font-playwrite text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Need to pay your deposit?
            </h2>

            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Currently we accept Venmo and mail-in deposits.
            </p>
          </div>

          {/* Bento Layout */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* =========================
          PAYMENT INFORMATION
      ========================= */}
            <div className="flex flex-col gap-5 lg:col-span-7">
              {/* Venmo */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008CFF]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#008CFF"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M19.5 3.5c.4 1.1.6 2.2.6 3.4 0 4.2-3.6 9.5-6.5 13.1H7.1L4 3.9l6.1-.6 1.7 11c1.6-2.5 3.5-6.2 3.5-8.5 0-1.1-.2-1.8-.4-2.4l4.6.1z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-playwrite text-xl font-bold text-gray-900 sm:text-2xl">
                      Pay Using Venmo
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      Send your deposit directly to Nelson Lee Tree Farm through
                      Venmo.
                    </p>
                  </div>
                </div>

                <a
                  href="https://venmo.com/u/nelsonleetreefarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#008CFF] px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0077D9] hover:shadow-lg sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M19.5 3.5c.4 1.1.6 2.2.6 3.4 0 4.2-3.6 9.5-6.5 13.1H7.1L4 3.9l6.1-.6 1.7 11c1.6-2.5 3.5-6.2 3.5-8.5 0-1.1-.2-1.8-.4-2.4l4.6.1z" />
                  </svg>
                  Pay Nelson Lee Tree Farm
                </a>
              </div>

              {/* Mail-in Deposit */}
              <div className="rounded-2xl border border-primary-green/15 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-green text-white">
                    <span className="text-xl">✉</span>
                  </div>

                  <div>
                    <h3 className="font-playwrite text-xl font-bold text-gray-900 sm:text-2xl">
                      Prefer to Mail Us a Check?
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-red-600 sm:text-base">
                      Please be sure to send checks to this address:
                    </p>

                    <p className="mt-1 text-base font-medium text-gray-800">
                      138 Cummins Ferry Rd
                      <br />
                      Versailles, KY 40383
                    </p>
                  </div>
                </div>
              </div>

              {/* Helpful Notice */}
              <div className="rounded-2xl bg-primary-green p-6 text-white shadow-sm sm:p-7">
                <p className="text-sm leading-6 text-white/90 sm:text-base">
                  Once your deposit has been received, your appointment will be
                  confirmed.
                </p>
              </div>
            </div>

            {/* =========================
          PHOTO BENTO
      ========================= */}
            <div className="grid grid-cols-2 gap-3 lg:col-span-5">
              {/* Large Photo */}
              <div className="group col-span-1 overflow-hidden rounded-2xl bg-white p-3 shadow-sm sm:col-span-1">
                <img
                  src="/assets/images/Photographers1.jpg"
                  alt="Nelson Lee Tree Farm"
                  className="h-full min-h-[280px] w-full rounded-xl object-fill transition duration-500 group-hover:scale-105 sm:min-h-[420px]"
                />
              </div>

              {/* Smaller Photo */}
              <div className="group overflow-hidden col-span-1 rounded-2xl bg-white p-3 shadow-sm">
                <img
                  src="/assets/images/Photographers5.jpg"
                  alt="Christmas trees at Nelson Lee Tree Farm"
                  className="h-full min-h-[280px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105 sm:min-h-[420px]"
                />
              </div>

              {/* Decorative Bottom Card */}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-4 mt-24">
        <div className="rounded-2xl max-w-7xl md:mx-10">
          <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-10 justify-center lg:items-start items-end pb-[65px]">
            <div className="relative lg:w-[700px] lg:flex hidden w-[300px] bg-white p-4 rounded-xl h-fit">
              <img
                src="/assets/images/Photographers2.jpg"
                className="w-full md:h-[500px] h-auto min-w-[260px] rounded-xl object-fill"
              />
              <div className="absolute md:bottom-[-120px] md:left-[-20px] bottom-[-20px] left-[-20px] rounded-lg border-secondary-green border-[12px]">
                <img
                  src="/assets/images/Photographers4.jpg"
                  className="md:w-[160px] md:h-[250px] w-[150px] h-[150px] rounded-lg  object-fill"
                />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start items-start">
              <h2 className=" font-bold text-2xl md:text-3xl font-playwrite text-black">
                FAQs
              </h2>
              <h2 className="md:pb-10 font-bold text-2xl md:text-3xl font-playwrite text-black">
                You might also be wondering...
              </h2>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                What is the fee for photographers to take pictures/mini sessions
                at your farm?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                It is $50 for 0-4 hours with a non-refundable deposit of $15.00
                due at booking.
              </p>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                What if I just have one family to photograph?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                It is still $50 with a $15 deposit. It takes manpower to set up
                and be present when you are here and we have to be fair to
                everyone. Please understand we are running a business too!
              </p>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                Do you allow dogs for the photo sessions at the farm?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                Yes. Well-behaved dogs ON A LEASH are welcome! Humans are
                responsible for picking up after them.
              </p>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                Can photographers use the props set up at the farm?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                Absolutely! Please be respectful of our property, as some items
                are antiques and nothing set up is meant for play.
              </p>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                Are there paved pathways throughout the farm?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                We do not have any paved surfaces (yet, maybe someday!) There is
                gravel, grass, woodchips, and dirt. It is still very much a farm
                - so keep in mind that if it rains or snows - there probably
                will be mud! Watch your step!
              </p>
              <p className="text-xl font-semibold w-full pb-2 font-playwrite">
                What happens if the weather prevents me from coming out to take
                pictures?
              </p>
              <p className="text-lg font-normal w-full pb-12">
                We will work together to get you rescheduled but please be
                weather aware and contact us as far in advance as possible if
                you believe weather is going to be an issue.
              </p>
            </div>
            <div className="relative hidden md:flex md:w-[700px] w-[300px] bg-white p-4 rounded-xl h-fit">
              <img
                src="/assets/images/Photographers1.jpg"
                className="w-full md:h-[500px] h-auto min-w-[260px] rounded-xl object-fill"
              />
              <div className="absolute md:w-[190px] w-[200px] md:bottom-[-120px] md:left-[150px] bottom-[-20px] left-[-20px] rounded-lg border-secondary-green border-[12px]">
                <img
                  src="/assets/images/Photographers5.jpg"
                  className=" md:h-[250px] w-full h-[150px]  object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
