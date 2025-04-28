import { Banner } from "@/components/Banner"
import { Header } from "@/components/Header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
          <div className="flex flex-col md:flex-row gap-x-2 text-sm pt-2 justify-center items-center">
            <p>859-433-0095 |</p>
            <p> Nelsonleetreefarm@gmail.com | </p>
            <p> 10125 Troy Pike, Versailles KY, 40383</p>
          </div>
        </header>
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
        </div>
      </div>
    </>
  )
}
