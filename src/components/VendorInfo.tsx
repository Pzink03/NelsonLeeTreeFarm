import { Mail, Phone, TreePine, Tag, Plug, Clock, Store } from "lucide-react"

export default function VendorInfo() {
  return (
    <section className="w-full bg-[#f1f3ed] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-b from-gray-300 to-primary-green sm:w-24" />

            <TreePine
              size={28}
              className="fill-primary-green text-primary-green"
            />

            <div className="h-px w-16 bg-gradient-to-b from-gray-300 to-primary-green sm:w-24" />
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary-green">
            Information For Vendors
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* Intro Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-4xl font-bold leading-tight text-black sm:text-5xl">
                What You Need
                <br />
                to Know!
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-black" />

              <p className="mt-5 text-base leading-7 text-gray-700">
                We’re excited to welcome vendors to the{" "}
                <span className="font-semibold text-primary-green">
                  Nelson Lee Tree Farm 3rd Annual Chili Cookoff!
                </span>{" "}
                We’re looking forward to having you join us and help make this
                year’s event a great one.
              </p>
            </div>

            {/* Important Details */}
            <div className="rounded-2xl border border-primary-green/10 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-center font-serif text-2xl font-bold text-primary-green">
                Vendor Information
              </h3>

              <div className="space-y-4">
                {/* No Charge */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green text-white">
                    <Tag size={19} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      No Charge to Set Up
                    </h4>

                    <p className="text-sm leading-6 text-gray-600">
                      There is no charge for vendors to set up at the event.
                    </p>
                  </div>
                </div>

                {/* Electricity */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green text-white">
                    <Plug size={19} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Electricity Available
                    </h4>

                    <p className="text-sm leading-6 text-gray-600">
                      We do have electricity, but extension cords and surge
                      protectors are encouraged if you’ll need power.
                    </p>
                  </div>
                </div>

                {/* Arrival */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green text-white">
                    <Clock size={19} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Arrive by 4:00 PM
                    </h4>

                    <p className="text-sm leading-6 text-gray-600">
                      Vendors should arrive by 4:00 PM to allow plenty of time
                      to get set up before the event begins.
                    </p>
                  </div>
                </div>

                {/* Bring Supplies */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-green text-white">
                    <Store size={19} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Bring Your Setup
                    </h4>

                    <p className="text-sm leading-6 text-gray-600">
                      Please bring your own table, setup materials, supplies,
                      and any equipment needed for your booth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm leading-6 text-red-600">
                <span className="font-bold">Important:</span> Vendors must email
                or call Nelson Lee Tree Farm before coming to let us know you’ll
                be attending.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:nelsonleetreefarm@gmail.com"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-gray-300 to-primary-green px-6 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail size={20} />
                Email Nelson Lee Tree Farm
              </a>

              <a
                href="tel:+18593212286"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-gray-300 to-primary-green px-6 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Phone size={20} />
                Call Nelson Lee Tree Farm
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT PHOTO BENTO
          ========================= */}
          <div className="grid min-h-[500px] grid-cols-2 gap-3 lg:col-span-7 lg:grid-cols-3">
            {/* Large Image */}
            <div className="group relative col-span-2 overflow-hidden rounded-2xl lg:col-span-2">
              <img
                src="/assets/images/ChiliCookoffPic4.jpg"
                alt="Nelson Lee Tree Farm vendors"
                className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image */}
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/assets/images/ChiliCookoffPic1.jpg"
                alt="Vendor at Nelson Lee Tree Farm"
                className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image */}
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/assets/images/ChiliCookoffPic8.jpg"
                alt="Nelson Lee Tree Farm event"
                className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Large Bottom Image */}
            <div className="group relative col-span-2 overflow-hidden rounded-2xl">
              <img
                src="/assets/images/ChiliCookoffPic10.jpg"
                alt="Nelson Lee Tree Farm event vendors"
                className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-primary-green px-6 py-8 text-center text-white shadow-md">
          <h3 className="font-serif text-2xl font-bold sm:text-3xl">
            We Can’t Wait to Have You Join Us!
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 sm:text-base">
            Thank you for being part of the Nelson Lee Tree Farm community.
          </p>
        </div>
      </div>
    </section>
  )
}
