import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import Card from "../ui/Card";
import CardGrid from "../ui/CardGrid";

function RecentlyGenerated() {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-[#1A1A18]/40 font-bold">RECENTLY GENERATED</h2>
                <Link to='/history' className="flex text-[#ECB613] items-center pb-1.2 border-b ">View All <span><ArrowRight size={20} /></span></Link>
            </div>
            <div className="mt-5">
                <CardGrid showUpload={false}>
                    <Card src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg" cardText="FEB 28, 2026" cardTitle="Top" />
                    <Card src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg" cardText="MAR 1, 2026" cardTitle="Top" />
                    <Card src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" cardText="MAR 2, 2026" cardTitle="Top" />
                    <Card src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg" cardText="MAR 3, 2026" cardTitle="Top" />
                </CardGrid>
            </div>
        </div>
    )
}

export default RecentlyGenerated;
