import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function HomeButtons(){
    return (
        <>
            <div className="flex">
                <div className="border-b-2 border-r-2 px-10 py-4 mt-4 z-60">
                    <Button className="px-10 py-6 bg-gray-400">Inventory</Button>
                </div>
                <div className="border-b-2 px-10 py-4 mt-4 z-60">
                    <Link to={"/contact"}>
                        <Button className="px-10 py-6 bg-gray-400">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
