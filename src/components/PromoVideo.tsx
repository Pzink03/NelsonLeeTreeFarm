export default function PromoVideo({ media }: { media: string }) {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center text-center pt-12">
          <h1 className="flex text-2xl md:text-3xl capitalize font-playwrite mb-4 max-w-2xl font-semibold">
            Celebrating America’s 250th Birthday
          </h1>
          <p className="flex md:text-lg max-w-2xl">
            In honor of 250 years of freedom, Nelson Lee Tree Farm is proud to
            recognize and thank the men and women who have served our country.
            All year long, we’re offering 15% off for all veterans as a small
            token of our appreciation for your service and sacrifice.
          </p>
        </header>

        <div className="flex max-w-4xl gap-x-10 py-10">
          <div className="w-full max-w-[900px]">
            <video
              src={media}
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="metadata"
              className="w-full md:h-full h-[300px] object-contain rounded-2xl shadow-lg"
            />
          </div>
          {/* <div className="flex flex-col justify-center">
            <h1 className="font-helvetica font-semibold text-2xl border-b-2 ">
            Spring is Here
            </h1>
            <p className="flex justify-center font-raleway">
            Spring is here. Come out and see us. We are always adding new
            inventory so please call us if you're looking for anyhting in
            particular.
            </p>
            </div> */}
        </div>
      </div>
    </>
  )
}
