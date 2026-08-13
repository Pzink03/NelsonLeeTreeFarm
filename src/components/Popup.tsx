import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export function Popup() {
  const [showCoupon, setShowCoupon] = useState(true)

  if (!showCoupon) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6">
      <div className="relative w-full max-w-[92vw] overflow-hidden rounded-2xl bg-secondary-green shadow-2xl sm:max-w-4xl">
        {/* Close Button */}
        <button
          onClick={() => setShowCoupon(false)}
          aria-label="Close popup"
          className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <FaTimes size={15} className="sm:hidden" />
          <FaTimes size={18} className="hidden sm:block" />
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative flex max-h-[30vh] items-center justify-center bg-white sm:max-h-none">
            <img
              src="/assets/images/ChiliCookoffCover.svg"
              alt="Nelson Lee Tree Farm Chili Cook-Off"
              className="h-full max-h-[30vh] w-full object-contain sm:h-auto sm:max-h-none"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center px-5 py-6 text-center sm:px-10 sm:py-12">
            {/* Small Label */}
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-black sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
              Nelson Lee Tree Farm
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-bold leading-tight text-primary-green sm:text-4xl">
              3rd Annual
              <span className="mt-1 block text-black">Chili Cook-Off</span>
            </h2>

            {/* Divider */}
            <div className="my-3 h-1 w-12 rounded-full bg-primary-green sm:my-5 sm:w-16" />

            {/* Description */}
            <p className="max-w-md text-sm leading-relaxed text-black/90 sm:text-lg">
              Ready to bring the heat? Enter your chili in our 3rd Annual Chili
              Cook-off to compete!
            </p>

            {/* CTA */}
            <div className="mt-5 flex w-full flex-col gap-2 sm:mt-7 sm:flex-row sm:justify-center sm:gap-3">
              <Link
                to="/specialevents"
                onClick={() => setShowCoupon(false)}
                className="rounded-lg bg-primary-green px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600 sm:px-7 sm:py-3 sm:text-base"
              >
                View Event
              </Link>

              <button
                onClick={() => setShowCoupon(false)}
                className="rounded-lg border border-black/40 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/10 sm:px-7 sm:py-3 sm:text-base"
              >
                Close
              </button>
            </div>

            {/* Footer Note */}
            <p className="mt-3 text-[10px] text-black/70 sm:mt-5 sm:text-xs">
              Click “View Event” to see the details and enter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
