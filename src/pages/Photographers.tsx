import { Banner } from "@/components/Banner"
import { Test } from "@/components/Test"

export function Photographers() {
  return (
    <>
      <Banner
        title="Book Your Photo Session at Nelson Lee Tree Farm"
        image="/assets/images/MainPic.png"
        subtitle="Submit your appointment request below and we’ll follow up with availability and pricing details."
      />
      <Test />

      <section className="flex flex-col justify-center items-center p-4 mt-24">
        <div className="rounded-2xl max-w-7xl md:mx-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-10 justify-center md:items-start items-end pb-[65px]">
            <div className="relative md:w-[700px] md:flex hidden w-[300px] bg-white p-4 rounded-xl h-fit">
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
