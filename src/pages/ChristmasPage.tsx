import { Banner } from "@/components/Banner"
import { Test } from "@/components/Test"
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri"
// import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

export function ChristmasPage() {
  return (
    <>
      <Banner
        title="Merry Christmas!"
        image="/assets/images/MainPic.png"
        subtitle="Explore our Christmas Tree Rental Program—details below! 🎄"
      />
      <section className="flex flex-col justify-center items-center p-4 mt-12">
        <div className="rounded-2xl max-w-7xl md:mx-10">
          <div className="flex md:justify-between justify-end">
            <img
              src="assets/images/ChristmasCornerLeft.png"
              className="hidden md:flex"
            />
            <img
              src="assets/images/ChristmasTopRight.png"
              className="hidden md:flex"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-10 justify-center items-center md:px-12 p-4">
            <div className="relative w-full p-4 bg-red-800 rounded-xl h-fit">
              <img
                src="/assets/images/ChristmasTreesImage1.png"
                className="w-full md:h-[500px] h-auto min-w-[260px] rounded-xl border-white border-8 object-fill"
              />
              <div className="absolute md:bottom-[-50px] md:left-[-50px] bottom-[-20px] left-[-20px] rounded-xl border-white border-[24px]">
                <img
                  src="/assets/images/ChristmasTreesImage2.jpg"
                  className="md:w-[260px] md:h-[260px] w-[150px] h-[150px] rounded-xl  object-fill"
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
            <div className="flex flex-col justify-start items-center">
              <h2 className=" md:px-10 md:pb-10 font-semibold text-2xl md:text-3xl font-playwrite text-center text-christmas-green">
                More than a Christmas Tree!
              </h2>
              <p className="text-lg font-normal pb-12">
                Nelson Lee Tree Farm without a doubt loves Christmas Trees,
                during our marketing and promotions we have asked the consumer
                to consider that these trees have multi-purpose value.
              </p>
              <ul className="flex flex-col justify-start gap-y-4">
                <li className="flex items-start gap-x-2">
                  <span className="pt-1">
                    <RiNumber1 size={20} color="green" />
                  </span>
                  <div className="flex flex-col h-full items-start justify-start">
                    <p className="font-semibold text-xl">Christmas Tradition</p>
                    <p>
                      Yes, the tradition, build memories with that beautiful
                      Christmas tree
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-2">
                  <span className="pt-1">
                    <RiNumber2 size={20} color="green" />
                  </span>
                  <div className="flex flex-col h-full items-start justify-start">
                    <p className="font-semibold text-xl">
                      Add Some Curb Appeal
                    </p>
                    <p>
                      Curb appeal and added value to your property by enhancing
                      your home's landscape.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-2">
                  <span className="pt-1">
                    <RiNumber3 size={20} color="green" />
                  </span>
                  <div className="flex flex-col h-full items-start justify-start">
                    <p className="font-semibold text-xl">Save A Tree</p>
                    <p>Environmentally friendly...you saved a tree!</p>
                  </div>
                </li>
                <li className="flex items-start gap-x-2">
                  <span className="pt-1">
                    <RiNumber4 size={20} color="green" />
                  </span>
                  <div className="flex flex-col h-full items-start justify-start">
                    <p className="font-semibold text-xl">Low Maintenance</p>
                    <p>
                      Low maintenance, Evergreens, once established are one of
                      the easiest trees to manage
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <img
              src="assets/images/ChristmasBottomLeft.png"
              className="hidden md:flex"
            />
            <img
              src="assets/images/ChristmasCornerRight.png"
              className="hidden md:flex"
            />
          </div>
        </div>
        <Test />

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
        {/* <div className="w-full md:px-10">

                    <div className=" md:w-full px-4 flex items-end justify-end pb-10" >
                        <div className="gap-10 flex bg-red-100 shadow-md flex-col md:p-2 p-4 lg:flex-row-reverse max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/ChristmasTree.jpg'
                            className=" w-[250px] h-[350px] object-fit object-top rounded"
                            loading="eager"
                            />
                            <div>
                                <div className="flex flex-col p- justify-center text-center items-center lg:items-en">
                                <div className="px-2 mb-8">

                                    <RiNumber1 size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl text-xl font-playwrite font-semibold border-b-2 text-center pb-1 mb-4">
                                    Step Two
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    We’re dedicated to our craft, bringing years of knowledge and passion to every product we offer.                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-full px-4 flex items-start justify-start pb-10" >
                        <div className="gap-10 flex flex-col md:p-2 bg-gray-100 shadow-md p-4 lg:flex-row max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/GalleryImage34.jpg'
                            className=" w-[350px] h-[250px] object-cover object-top rounded"
                            />
                            <div>
                                <div className="flex flex-col p- justify-center text-center items-center lg:items-center">
                                <div className="px-2 mb-8">
                                    <RiNumber2 size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl text-xl font-playwrite font-semibold border-b-2 text-center pb-1 mb-4">
                                    Step Two
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    You can trust us to provide the highest quality and most reliable service, with transparency and integrity at every step.                             </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-full px- flex items-end justify-end pb-10" >
                        <div className="gap-10 flex bg-secondary-green shadow-md flex-col md:p-2 p-4 lg:flex-row-reverse max-w-6xl items-center lg:items-center">
                            <img
                            src='/assets/images/GalleryImage35.jpg'
                            className=" w-[350px] h-[250px] object-cover object-top rounded"
                            loading="eager"
                            />
                            <div>
                                <div className="flex flex-col p-4 justify-center text-center items-center lg:items-en">
                                <div className="px-2 mb-8">
                                    <RiNumber3 size={60} color="green"/>
                                    </div>
                                    <header className="md:text-2xl font-playwrite text-xl font-semibold border-b-2 text-center pb-1 mb-4">
                                    Step Three
                                    </header>
                                    <p className=" pt-10 font-raleway text-center text-lg ">
                                    We’re dedicated to our craft, bringing years of knowledge and passion to every product we offer.                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </section>
    </>
  )
}
