import { Banner } from "@/components/Banner"
import SpringCollageInfo from "@/components/SpringCollageInfo"
import { Button } from "@/components/ui/button"
import { ICON_LINKS } from "@/constants/data"
import { Link } from "react-router-dom"

export function Pricing() {
  return (
    <>
      <Banner
        title="Current Availability and Pricing"
        image="/assets/images/MainPic.png"
        subtitle="All prices and availability are updated regularly, but are subject to change. For most up to date inventory please call."
      />
      <div className="w-full text-2xl">
        <header className="flex flex-col justify-center items-center mt-10 py-4">
          <h1>Nelson Lee Tree Farm</h1>
          <h3 className="border-b-2 border-secondary-darkgreen px-4 pb-1">
            Current Pricing and Availability
          </h3>
        </header>
        <SpringCollageInfo />
        <div className="flex flex-col justify-center items-center">
          <img
            src="/assets/images/NLTFPricing.JPG"
            className="w-full max-w-5xl h-full"
            alt="pricing"
          />

          <img
            src="/assets/images/NLTFPricing2.JPG"
            alt="pricing2"
            className="w-full max-w-5xl h-full"
          />
          <img
            src="/assets/images/NLTFPricing3.JPG"
            alt="pricing3"
            className="w-full max-w-5xl h-full"
          />
          <img
            src="/assets/images/NLTFPricing4.JPG"
            alt="pricing4"
            className="w-full max-w-5xl h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center pt-12">
        <h1 className="flex text-2xl md:text-3xl capitalize font-playwrite mb-4 max-w-2xl font-semibold">
          Not sure we have what you need?
        </h1>
        <p className="flex md:text-lg max-w-2xl">
          Fill out the pre-order inquiry form and let us know which products
          you’re interested in. We’ll review your request and get back to you
          with current availability, pricing, and next steps. Please note that
          this form is for inquiries only and does not place an order or reserve
          a tree.
        </p>

        <div className="py-10 flex justify-center w-2/3">
          <Link to="/preorder" className="p-2">
            <Button className="w-full bg-secondary-darkgreen hover:scale-110 transition ease-in-out font-semibold text-base duration-300 hover:bg-secondary-green hover:text-secondary-darkgreen hover:border-secondary-darkgreen hover:border-2">
              Pre-order Inquiry
            </Button>
          </Link>
          <Link to="/pricing" className="p-2">
            <Button className="w-full bg-secondary-darkgreen hover:scale-110 transition ease-in-out font-semibold text-base duration-300 hover:bg-secondary-green hover:text-secondary-darkgreen hover:border-secondary-darkgreen hover:border-2">
              View Inventory
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
