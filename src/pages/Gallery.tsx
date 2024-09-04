import { Banner } from "@/components/Banner";


// type GalleryImageProps = {
//     id: number,
//     image: string,
// }

const galleryImages = [
    {
        id: 1,
        image: "/assets/images/GalleryImage1.jpg",
    },
    {
        id: 2,
        image: "/assets/images/GalleryImage2.jpg",
    },
    {
        id: 3,
        image: "/assets/images/GalleryImage3.jpg",
    },
    {
        id: 4,
        image: "/assets/images/GalleryImage4.jpg",
    },
    {
        id: 5,
        image: "/assets/images/GalleryImage5.jpg",
    },
    {
        id: 6,
        image: "/assets/images/GalleryImage6.jpg",
    },
    {
        id: 7,
        image: "/assets/images/GalleryImage7.jpg",
    },
    {
        id: 8,
        image: "/assets/images/GalleryImage8.jpg",
    },
    {
        id: 9,
        image: "/assets/images/GalleryImage9.jpg",
    },
    {
        id: 10,
        image: "/assets/images/GalleryImage10.jpg",
    },
    {
        id: 11,
        image: "/assets/images/GalleryImage11.jpg",
    },
    {
        id: 12,
        image: "/assets/images/GalleryImage12.jpg",
    },
    {
        id: 13,
        image: "/assets/images/GalleryImage13.jpg",
    },
    {
        id: 14,
        image: "/assets/images/GalleryImage14.jpg",
    },
    {
        id: 15,
        image: "/assets/images/GalleryImage15.jpg",
    },
    {
        id: 16,
        image: "/assets/images/GalleryImage16.jpg",
    },
]

export function Gallery(){
    return (
        <>
            <Banner title={"Come By and See Us"}  style="" image="/assets/images/GalleryBanner.png" subtitle="Stay tuned to our blog for expert gardening tips, sustainable landscaping ideas, and updates on the latest trends in tree care and plant cultivation. Whether you’re looking to enhance your garden or learn more about eco-friendly practices, we’re here to help you grow smarter and greener." />
            <h1 className="text-center font-medium text-xl md:p-24 px-4 py-10">Stay tuned to our blog for expert gardening tips, sustainable landscaping ideas, and updates on the latest trends in tree care and plant cultivation. Whether you’re looking to enhance your garden or learn more about eco-friendly practices, we’re here to help you grow smarter and greener.</h1>
                <div className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-1 gap-6 items-stretch auto-rows-[200px] grid-flow-dense bg-stone-100 m-0 p-6">
                    {galleryImages.map((perks) => (
                        <>
                            <img
                            key={perks.id}
                            src={perks.image}
                            alt="Gallery Image"
                            className="w-full row-span-2 md:even:col-span-2 object-cover hover:scale-105 transition ease-in-out hover:bg-black hover:opacity-60"
                            />
                            {/* <img
                            src={perks.image}
                            alt="Gallery Image"
                            className="w-full row-span-2 odd:col-span-2 first:col-span-1 object-cover"
                            /> */}

                        </>
                    ))}
                </div>
        </>
    )
}
