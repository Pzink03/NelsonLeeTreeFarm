import { Banner } from "@/components/Banner";

const galleryImages = [

    {
        id: 18,
        image: "/assets/images/GalleryImage18.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 19,
        image: "/assets/images/GalleryImage19.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 20,
        image: "/assets/images/GalleryImage20.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 22,
        image: "/assets/images/GalleryImage22.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 23,
        image: "/assets/images/GalleryImage23.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 24,
        image: "/assets/images/GalleryImage24.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 25,
        image: "/assets/images/GalleryImage25.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 26,
        image: "/assets/images/GalleryImage26.jpg",
        text: "Photo by @bellarsouthworth"
    },
    {
        id: 27,
        image: "/assets/images/GalleryImage27.jpg",
        text: "Photo by @bellarsouthworth"
    },


    {
        id: 1,
        image: "/assets/images/GalleryImage1.jpg",

    },
    {
        id: 2,
        image: "/assets/images/GalleryImage2.jpg",
        text: "Photo by Bella"
    },
    {
        id: 3,
        image: "/assets/images/GalleryImage3.jpg",
        text: "Photo by Bella"
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

];

export function Gallery() {
    return (
        <>
            <Banner
                title={"Come By and See Us"}
                style=""
                image="/assets/images/GalleryBanner.png"
                subtitle="Stay tuned for expert gardening tips, sustainable landscaping ideas, and updates on the latest trends in tree care and plant cultivation. Whether you’re looking to enhance your garden or learn more about eco-friendly practices, we’re here to help you grow smarter and greener."
            />
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-1 gap-6 items-stretch bg-stone-100 m-0 p-6">
                {galleryImages.map((imageData) => (
                    <div key={imageData.id} className="relative group">
                        <img
                            src={imageData.image}
                            alt="Gallery Image"
                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" // Set a fixed height
                        />
                        {imageData.text && (
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span>{imageData.text}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
