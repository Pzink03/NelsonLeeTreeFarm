import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export function Popup() {
  const [showCoupon, setShowCoupon] = useState(true)

  if (!showCoupon) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-secondary-green shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setShowCoupon(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105 hover:bg-white"
        >
          <FaTimes size={18} />
        </button>

        {/* Main Content */}
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative flex items-center justify-center bg-white">
            <img
              src="/assets/images/ChiliCookoffCover.svg"
              alt="Nelson Lee Tree Farm Chili Cook-Off"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center px-6 py-10 text-center sm:px-10 md:py-12">
            {/* Small Label */}
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-black">
              Nelson Lee Tree Farm
            </p>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-primary-green sm:text-4xl">
              3rd Annual
              <span className="mt-1 block text-black">Chili Cook-Off</span>
            </h2>

            {/* Divider */}
            <div className="my-5 h-1 w-16 rounded-full bg-primary-green" />

            {/* Description */}
            <p className="max-w-md text-base leading-relaxed text-black/90 sm:text-lg">
              Ready to bring the heat? Enter your chili in our 3rd Annual Chili
              to compete!
            </p>

            {/* CTA */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/specialevents"
                onClick={() => setShowCoupon(false)}
                className="rounded-lg bg-primary-green px-7 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600"
              >
                View Event
              </Link>

              <button
                onClick={() => setShowCoupon(false)}
                className="rounded-lg border border-black/40 px-7 py-3 font-semibold text-black transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            {/* Footer Note */}
            <p className="mt-5 text-xs text-black/70">
              Click “View Event” to see the details and enter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
