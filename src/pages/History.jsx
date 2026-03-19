import DateFilter from "../components/History/Filter/DateFilter";
import SearchOutfit from "../components/History/Filter/SearchOutfit";
import TotalOutfitCard from "../components/History/TotalOutfitCard";
import TitleText from "../components/ui/TitleText";
import Card from "../components/ui/Card";
import CardGrid from "../components/ui/CardGrid";
import Pagination from "../components/ui/Pagination";
// import MyDatePicker from "../components/History/Filter/MyDatePicker";

function History() {
    return (
        <div className="px-4 sm:px-6 lg:px-10 pt-10 bg-[#F7F4EF] min-h-[calc(100dvh-80px)] flex lg:items-center lg:justify-center">
            <div className="max-w-6xl ">
                <header>
                    <TitleText title="Your Style Archive" description="" />
                </header>

                <div className="mt-6">
                    <TotalOutfitCard />
                </div>

                {/* Search + Date Range */}
                <section>
                    <div className="mt-6 flex flex-col gap-4 lg:flex-row sm:items-center sm:justify-between">
                        <SearchOutfit />
                        <DateFilter />
                    </div>
                </section>

                {/* Card Grid */}
                <section>
                    <div className="mt-6">
                    <CardGrid showUpload={false}>
                        <Card
                            src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg"
                            cardText="FEB 28, 2026"
                            cardTitle="Top"
                        />
                        <Card
                            src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg"
                            cardText="MAR 1, 2026"
                            cardTitle="Top"
                        />
                        <Card
                            src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg"
                            cardText="MAR 2, 2026"
                            cardTitle="Top"
                        />
                        <Card
                            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"
                            cardText="MAR 3, 2026"
                            cardTitle="Top"
                        />
                    </CardGrid>
                </div>
                </section>

                {/* Pagination */}
                <div className="mt-10 pb-5 flex justify-center">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default History; 

