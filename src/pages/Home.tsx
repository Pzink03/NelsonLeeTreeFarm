import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";

export function Home(){
    return (
        <>
            <Banner title="Nelson Lee Tree Farm" image="/assets/images/Banner.jpg" />
            <div className="max-w-7xl h-full">
                <Header title={"Everything You Need To Start Your Garden"} />

            </div>
        </>
    )
}
