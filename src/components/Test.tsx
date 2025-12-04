import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function Test() {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center py-[65px] gap-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl gap-2">
        {/* Left Side */}
        <div className=" w-full flex flex-col  gap-y-12 items-start justify-between">
          <header className="w-full  md:pr-12 h-fit flex flex-col justify-start items-start gap-6">
            <h2 className=" font-semibold text-2xl text-center md:text-3xl font-playwrite text-christmas-red">
              Christmas Tree Rental Program
            </h2>
            <p>
              Our Christmas tree rental program makes it easy to enjoy the
              beauty of a live tree without the hassle. We’ll deliver a potted
              Christmas tree right to your door and pick it up at the end of the
              season. All you need to do is water and care for the tree while
              it’s in your home. A refundable deposit secures your rental, and
              once the tree is safely returned, you’ll get your deposit back.
              It’s an eco-friendly way to celebrate the holidays!
            </p>
            <Link to={"/contact"} className="pt-6">
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-secondary-darkgreen text-lg text-white"
              >
                Contact Us To Learn More!
              </Button>
            </Link>
          </header>
          <div className="w-full">
            <img
              src="/assets/images/NLTF 1.png"
              className="rounded-lg w-full md:max-h-[452px] max-h-[250px]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full flex items-stretch justify-center gap-2">
          {/* 3 card stack */}
          <div className="flex flex-col md:w-[57%] w-[37%] gap-2">
            <div className="w-full md:h-[415px] h-[175px]">
              <img
                src="/assets/images/NLTF 2.png"
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="w-full md:h-[235px] h-[130px]">
              <img
                src="/assets/images/NLTF 4.png"
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col text-center gap-2 p-2 bg-secondary-darkgreen rounded-lg justify-center items-center md:h-[235px] h-full">
              <p className="font-semibold md:text-xl text-lg text-white">
                Looking for something else?
              </p>

              <Link to={"/pricing"} className="px-4">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="bg-transparent  text-white px-2"
                >
                  View Inventory
                </Button>
              </Link>
            </div>
          </div>

          {/* 2 card stack */}
          <div className="flex flex-col w-full h-full gap-2">
            <div className="w-full md:h-[580px] h-[250px]">
              <img
                src="/assets/images/NLTF 3.png"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex h-full justify-center items-center bg-stone-200 rounded-lg">
              <img
                src="/assets/images/TreeFarmLogo.jpg"
                className="md:w-[310px] md:h-[310px] w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
