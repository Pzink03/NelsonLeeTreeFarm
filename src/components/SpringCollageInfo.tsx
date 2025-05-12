export default function SpringCollageInfo() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center pt-20">
        <div className="flex max-w-4xl gap-x-10 bg-secondary-green border-2 border-secondary-darkgreen rounded">
          <img
            src="/assets/images/SpringCollage.png"
            className="h-[700px] w-[500px] "
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-helvetica font-semibold text-2xl border-b-2 ">
              Spring is Here
            </h1>
            <p className="flex justify-center font-raleway">
              Spring is here. Come out and see us. We are always adding new
              inventory so please call us if you're looking for anyhting in
              particular.
            </p>
            <div className="grid grid-cols-3 text-sm pt-2 justify-center items-center">
              <p>859-433-0095</p>
              <p> Nelsonleetreefarm@gmail.com</p>
              <p> 10125 Troy Pike, Versailles KY, 40383</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
