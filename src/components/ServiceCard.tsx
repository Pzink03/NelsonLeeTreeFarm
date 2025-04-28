import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export function ServiceCard() {
  return (
    <>
      <section className="md:p-10 flex justify-center w-full">
        <div className="flex flex-col max-w-screen-2xl lg:flex-row justify-center w-full">
          <div className="hover:scale-105 flex flex-1 bg-secondary-green flex-col origin-right border-r-0 shadow-sm rounded-tr-none rounded-br-none justify-between items-center p-4 border-2 rounded md:my-44 my-24 bg-secondary-pink">
            <div className="text-center mb-4">
              <div className="font-medium text-2xl p-2 font-playfair">
                Evergreen Shrubs, Groundcovers & Grasses:
              </div>
              <img
                className=" w-96 h-80 object-cover object-center rounded border-2 border-primary-green p-1"
                src="/assets/images/GalleryImage10.jpg"
                alt=""
              />
            </div>
            <ul className="w-96 h-full font-raleway md:px-4 px-8 pt-4 list-disc flex justify-start flex-col gap-y-2 font-roboto">
              {/* <p className="text-center  text-xl font-semibold pb-2 font-playfair">Sub Title:</p> */}
              <li className="text-lg ">Taxus - Dark Green Spreader</li>
              <li className="text-lg ">Juniper Blue Rug</li>
              <li className="text-lg ">Juniper Blue Star</li>
              <li className="text-lg ">Juniper Grey Owl</li>
              <li className="text-lg ">Juniper Sea Green</li>
              <li className="text-lg ">Lemon Thread Cypress</li>
              <li className="text-lg">Gold Mop Cypress</li>
              <li className="text-lg">Gracillimus Maiden Grass</li>
              <li className="text-lg">Karl Forester Feather Grass</li>
              <li className="text-lg">Adaijo Maiden Grass</li>
              <li className="text-lg">White Pampas</li>
              <li className="text-lg">Pink Pampas</li>
            </ul>
            <Link
              to="/pricing"
              className="h-full flex justify-end items-end pt-4"
            >
              <Button className="bg-secondary-darkgreen">
                See prices and availability
              </Button>
            </Link>
          </div>
          <div className="hover:scale-105 flex flex-1 flex-col shadow-sm justify-start items-center p-4 border-2 rounded m-0 relative bg-secondary-green">
            <div className="text-center mb-4">
              <div className="font-semibold text-2xl p-2 font-playfair">
                Evergreen Trees, Conifers, and Deciduous Trees
              </div>
              <img
                src="/assets/images/GalleryImage16.jpg"
                alt=""
                className="w-96 h-80 object-cover object-center rounded border-4 border-secondary-pink p-2"
              />
            </div>
            <ul className="w-96 h-auto font-raleway list-disc md:px-4 px-8 flex flex-col gap-y-2 font-roboto">
              <p className="text-center font-playwrite font-semibold text-2xl underline pb-4">
                Evergreen Trees/Conifers
              </p>
              <li className="text-lg ">Norway Spruce</li>
              <li className="text-lg ">White Spruce</li>
              <li className="text-lg ">Black Hills Spruce</li>
              <li className="text-lg ">Colorado Blue Spruce</li>
              <li className="text-lg ">Canaan Fir</li>
              <li className="text-lg ">
                Aborvitaes: Green Giants, Emerald Green, Blue Point Junipers
              </li>
              <h1 className="text-center font-semibold text-2xl underline font-playwrite pb-4">
                Deciduous Trees
              </h1>
              <li className="text-lg ">October Glory</li>
              <li className="text-lg ">Autumn Blaze</li>
              <li className="text-lg ">Red Maple</li>
              <li className="text-lg ">Sun Valley Maple</li>
              <li className="text-lg ">Japanese Bloodgood</li>
              <li className="text-lg ">Purple Leaf Plum</li>
              <li className="text-lg ">Okame Cherry</li>
              <li className="text-lg ">Akebono</li>
              <li className="text-lg ">Red Oak</li>
              <li className="text-lg ">Willow Oak</li>
              <li className="text-lg ">Burr Oak</li>
              <li className="text-lg ">Bald Cypress</li>
              <li className="text-lg ">Katsura Tree</li>
              <li className="text-lg ">
                Magnolias: Bracken Brown, Sweetbay, Jane
              </li>
              <li className="text-lg ">Weeping Willow</li>
              <li className="text-lg ">Corkscrew Willow</li>
              <li className="text-lg ">Cleveland Select Pear</li>
              <li className="text-lg ">Dogwoods</li>
            </ul>
            <Link
              to="/pricing"
              className="h-full flex justify-end items-end pt-4"
            >
              <Button className="bg-secondary-darkgreen">
                See prices and availability
              </Button>
            </Link>
          </div>
          <div className="hover:scale-105 h-auto flex flex-1 flex-col bg-secondary-green origin-left border-l-0 rounded-tl-none rounded-bl-none shadow-sm justify- items-center p-4 border-2 rounded my-44 bg-secondary-pink">
            <div className="text-center mb-4">
              <div className="font-medium text-2xl pb-2 font-playfair">
                Shrubs
              </div>
              <img
                className="w-96 h-80 object-cover object-right rounded border-2 border-primary-green p-1"
                src="/assets/images/Shrubs.JPG"
                alt=""
              />
            </div>
            <ul className="w-80 h-auto list-disc font-raleway flex pt-4 flex-col gap-y-2 font-roboto">
              {/* <p className="text-center text-xl font-semibold pb-2 font-playfair">Sub Title</p> */}
              <li className="text-lg ">Barberry</li>
              <li className="text-lg ">Boxwoods</li>
              <li className="text-lg ">Spirea</li>
              <li className="text-lg ">
                Hydrangeas: Anabelles, Incrediballs, Limelights, Little Limes,
                Quick Fires, Endless Summer...
              </li>
              <li className="text-lg ">Holly's</li>
              <li className="text-lg ">Viburnum</li>
              <li className="text-lg">Dappled Willow</li>
              <li className="text-lg">Burning Bush</li>
            </ul>
            <Link
              to="/pricing"
              className="h-full flex justify-end items-end pt-4"
            >
              <Button className="bg-secondary-darkgreen">
                See prices and availability
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
