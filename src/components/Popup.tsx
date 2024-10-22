import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// export function Popup() {
//   const [showCoupon, setShowCoupon] = useState(true);
//   return (
//     showCoupon && (
//       <div className="fixed inset-0 h-full w-full bg-black bg-opacity-30 flex justify-center items-center z-50">
//         <div className="w-full h-full relative border-4 rounded-lg shadow-lg flex-col justify-center items-center">
//           <div
//             onClick={() => setShowCoupon(false)}
//             className="cursor-pointer justify-items-end z-10 sm:flex hidden items-end justify-end pr-2 pt-2"
//           >
//             <FaTimes size={30} />
//           </div>

//           <div className="flex w-full h-full py-20 mt-10 md:mt-0 justify-center relative">
//             <img
//               src="/assets/images/Popup.png"
//               className="md:max-w-4xl w-full h-auto object-contain"
//             />

//             {/* Button positioned at the bottom of the image */}
//             <div className="absolute bottom-16 flex gap-4">

//             <button
//               onClick={() => setShowCoupon(false)}
//               className=" md:right-96 mb-5 px-16 py-2 bg-primary-green text-white rounded hover:bg-green-600 focus:outline-none"
//             >
//               Close
//             </button>
//             <Link
//               to={"/specialevents"}
//               className="mb-5 px-16 py-2 whitespace-nowrap bg-primary-green text-white rounded hover:bg-green-600 focus:outline-none"
//             >
//               View Event
//             </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// }


export function Popup(){
    const [showCoupon, setShowCoupon] = useState(true)
    return(
 showCoupon && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 overflow-y-scroll scroll-smooth">
                          <div className="bg-secondary-green my-36 w-full border-4 xl:max-w-4xl md:w-4/6 rounded-lg shadow-lg flex-col justify-center items-center">
                              <div
                                onClick={() => setShowCoupon(false)}
                                className="cursor-pointer justify-items-end z-10 sm:flex hidden items-end justify-end pr-2 pt-2"
                                >
                                <FaTimes size={30} />
                              </div>
                            <div className="p-5 rounded-lg flex flex-col-reverse md:flex-row items-center justify-center">
                                <div className="flex flex-col justify-start items-center gap-4">
                                  <div className="relative order-3">
                                  <img
                                  src="/assets/images/Popup.png"
                                  className="w-full h-full object-cover"
                                  />
                                  </div>
                                </div>
                              </div>
                                <div className="flex flex-col items-center border-t-2  justify-center pb-2">
                                <div className="text-center text-lg border-primary-green lg:w-4/6 w-5/6 border-t-2 pt-2 whitespace-pre-line">
                                To enter in our chili contest, please click the view events button below and fill out a form!

                                </div>
                                <div className="  border-black flex gap-4">
            <button
          onClick={() => setShowCoupon(false)}
             className=" my-5 px-16 py-2 bg-primary-green text-white rounded hover:bg-green-600 focus:outline-none"
            >
              Close
            </button>
            <Link
              to={"/specialevents"}
              onClick={() => setShowCoupon(false)}
               className="my-5 px-16 py-2 whitespace-nowrap bg-primary-green text-white rounded hover:bg-green-600 focus:outline-none"
             >
               View Event
            </Link>
            </div>
                                </div>
                          </div>
                            </div>
                    )
    )
}
