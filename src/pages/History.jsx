import DateFilter from "../components/History/Filter/DateFilter";
import SearchOutfit from "../components/History/Filter/SearchOutfit";

import TitleText from "../components/ui/TitleText";
import Card from "../components/ui/Card";
import CardGrid from "../components/ui/CardGrid";
import Pagination from "../components/ui/Pagination";
import TotalItems from "../components/wardrobe/TotalItems";

function History() {
    return (
        <div className="page-enter px-4 sm:px-6 lg:px-10 pt-10 bg-[#F7F4EF]  flex flex-col gap-8 lg:items-center lg:justify-center min-h-[calc(100dvh-80px)]">
            <div className="max-w-6xl flex flex-col gap-3 ">
                <header>
                    <TitleText title="Your Style Archive" description="" />
                </header>

                <TotalItems items={4} items_name={`look`} />


                {/* Search + Date Range */}
                <section>   
                    <div className="flex flex-col gap-4 lg:flex-row sm:items-start sm:justify-between lg:items-end">
                        <SearchOutfit />
                        <DateFilter />
                    </div>
                </section>

                {/* Card Grid */}
                <section>
                    <div>
                        <CardGrid showUpload={false}>
                            <Card
                                src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg"
                                cardText="FEB 28, 2026"
                                cardTitle="Casual"
                                selected={true}
                            />
                            <Card
                                src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg"
                                cardText="MAR 1, 2026"
                                cardTitle="Formal"
                            />
                            <Card
                                src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg"
                                cardText="MAR 2, 2026"
                                cardTitle="Social"
                                
                            />
                            <Card
                                src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"
                                cardText="MAR 3, 2026"
                                cardTitle="Home"
                                selected={true}
                            />
                        </CardGrid>
                    </div>
                </section>
            </div>
            <Pagination />
        </div>
    )
}

export default History;

