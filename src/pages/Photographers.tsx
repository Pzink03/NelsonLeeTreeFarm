import { Banner } from "@/components/Banner"
import { Test } from "@/components/Test"
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri"

// import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

export function Photographers() {
  return (
    <>
      <Banner
        title="Merry Christmas!"
        image="/assets/images/MainPic.png"
        subtitle="Explore our Christmas Tree Rental Program—details below!"
      />
      <Test />

      <section className="flex flex-col justify-center items-center p-4 mt-24">
        <div className="rounded-2xl max-w-7xl md:mx-10">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-24 justify-center items-start pb-[65px]">
            <div className="relative w-[700px] bg-secondary-green p-6 rounded-xl h-fit">
              <img
                src="/assets/images/ChristmasTreesImage1.png"
                className="w-full md:h-[500px] h-auto min-w-[260px] rounded-xl object-fill"
              />
              <div className="absolute md:bottom-[-50px] md:left-[-50px] bottom-[-20px] left-[-20px] rounded-lg border-secondary-darkgreen border-[12px]">
                <img
                  src="/assets/images/ChristmasTreesImage2.jpg"
                  className="md:w-[260px] md:h-[260px] w-[150px] h-[150px] rounded-lg  object-fill"
                />
              </div>
            </div>
            {/* <img
                        src="assets/images/GalleryImage36.jpg"
                        className="w-44 hover:scale-125 transition-transform rounded border-white border-2 p-1"
                        />
                        <img
                        src="assets/images/GalleryImage34.jpg"
                        className="w-44 h-44 hover:scale-125 transition-transform rounded border-white border-2 p-1"
                        /> */}
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
          </div>
          {/* <div className="flex justify-between">
            <img
              src="assets/images/ChristmasBottomLeft.png"
              className="hidden md:flex"
            />
            <img
              src="assets/images/ChristmasCornerRight.png"
              className="hidden md:flex"
            />
          </div> */}
        </div>

        {/* {showSuccessMessage && (
          <div className="fixed inset-0 bg-black z-50 bg-opacity-30 flex justify-center items-center">
            <div className="bg-secondary-green p-5 w-80 h-56 rounded-xl flex flex-col items-center justify-between shadow-lg">
              <p className="text-center font-bold">
                Inquiry sent successfully!{" "}
              </p>
              <p className="text-center">
                Thanks for submitting your inquiry! We will review your
                submission and get back to you shortly!
              </p>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="mt-4 px-10 py-2 font-semibold bg-primary-green text-white rounded hover:scale-110 transition focus:outline-none"
              >
                Okay
              </button>
            </div>
          </div>
        )} */}

        <h1 className="mt-24 md:pb-10 bg-gray-800 font-semibold text-center text-xl md:text-3xl font-playwrite text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-green-500">
          Nelson Lee Tree Farm Live Christmas Tree Rental Terms & Conditions:
        </h1>
        <p className="text-lg font-playwrite px-4 md:max-w-3xl">
          1. We (NLTF) promise to provide a Live/Healthy Tree to our customer
          upon signed and paid agreement.
          <br />
          2. Customer agrees while in possession of Live Tree they will exercise
          the following requirements and recommendations: Upon arrival at your
          home, let your tree stay on the porch, garage, or wherever, outside
          for a day or 2. You’ll need to have a leak-proof container for this
          tree to sit in.
          <br />
          Pick a spot in the house away from all heat sources. Near windows,
          back doors or bay window areas are great. The cooler the spot the
          better! Please use cool burning lights, LED types are better. Irrigate
          regularly, water or ice daily. (Tip: use bags of ice, 2-3 inches deep
          on top of the soil or root ball, this is more effective and much less
          messy.) After Christmas (or 15-21 days maximum) reverse the process
          and sit your tree back on the porch, garage, etc. These
          recommendations are to keep the tree from breaking dormancy and avoid
          transplant shock! Give us a call or pre-arrange pick up of your tree
          (or you may return it) and we’ll place it back in its original
          container here at Nelson Lee Tree Farm. Nelson Lee Tee Farm wants you
          to enjoy the tree, build family memories and continue to use us as a
          resource for years to come!{" "}
        </p>
        <div className="w-full md:px-10">
          <div className=" md:w-full px-4 flex items-end justify-end pb-10">
            <div className="gap-10 flex bg-red-100 shadow-md flex-col md:p-2 p-4 lg:flex-row-reverse max-w-6xl items-center lg:items-center">
              <img
                src="/assets/images/ChristmasTree.jpg"
                className=" w-[250px] h-[350px] object-fit object-top rounded"
                loading="eager"
              />
              <div>
                <div className="flex flex-col p- justify-center text-center items-center lg:items-en">
                  <div className="px-2 mb-8">
                    <RiNumber1 size={60} color="green" />
                  </div>
                  <header className="md:text-2xl text-xl font-playwrite font-semibold border-b-2 text-center pb-1 mb-4">
                    Step Two
                  </header>
                  <p className=" pt-10 font-raleway text-center text-lg ">
                    We’re dedicated to our craft, bringing years of knowledge
                    and passion to every product we offer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-full px-4 flex items-start justify-start pb-10">
            <div className="gap-10 flex flex-col md:p-2 bg-gray-100 shadow-md p-4 lg:flex-row max-w-6xl items-center lg:items-center">
              <img
                src="/assets/images/GalleryImage34.jpg"
                className=" w-[350px] h-[250px] object-cover object-top rounded"
              />
              <div>
                <div className="flex flex-col p- justify-center text-center items-center lg:items-center">
                  <div className="px-2 mb-8">
                    <RiNumber2 size={60} color="green" />
                  </div>
                  <header className="md:text-2xl text-xl font-playwrite font-semibold border-b-2 text-center pb-1 mb-4">
                    Step Two
                  </header>
                  <p className=" pt-10 font-raleway text-center text-lg ">
                    You can trust us to provide the highest quality and most
                    reliable service, with transparency and integrity at every
                    step.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-full px- flex items-end justify-end pb-10">
            <div className="gap-10 flex bg-secondary-green shadow-md flex-col md:p-2 p-4 lg:flex-row-reverse max-w-6xl items-center lg:items-center">
              <img
                src="/assets/images/GalleryImage35.jpg"
                className=" w-[350px] h-[250px] object-cover object-top rounded"
                loading="eager"
              />
              <div>
                <div className="flex flex-col p-4 justify-center text-center items-center lg:items-en">
                  <div className="px-2 mb-8">
                    <RiNumber3 size={60} color="green" />
                  </div>
                  <header className="md:text-2xl font-playwrite text-xl font-semibold border-b-2 text-center pb-1 mb-4">
                    Step Three
                  </header>
                  <p className=" pt-10 font-raleway text-center text-lg ">
                    We’re dedicated to our craft, bringing years of knowledge
                    and passion to every product we offer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
