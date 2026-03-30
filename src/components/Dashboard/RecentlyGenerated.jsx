import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import CardGrid from "../ui/CardGrid";
import useOutfitHistory from "../../hooks/useHistory";

function RecentlyGenerated() {
  const { outfits, totalOutfits } = useOutfitHistory();
  const topItems = outfits.slice(0, 4);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[#1A1A18]/40 font-bold text-sm sm:text-base">
          RECENTLY GENERATED
        </h2>
        <Link
          to="/history"
          className="flex gap-1 text-[#ECB613] items-center pb-1.2  text-sm sm:text-base hover:text-[#c0930b]"
        >
          <span>View All</span>
          <span>
            <ArrowRight size={20} />
          </span>
        </Link>
      </div>
      <div className="mt-5">
        {totalOutfits === 0 && (
          <section
            aria-label="Empty history"
            className="w-full flex flex-col items-center justify-center py-20 gap-3"
          >
            <p className="playfair italic font-semibold text-2xl text-[#1C1C1A]">
              No looks yet
            </p>
            <p className="jost text-sm text-[#6B6460]">
              Your generated outfits will appear here
            </p>
          </section>
        )}
        <CardGrid showUpload={false}>
          {outfits &&
            topItems.map((item) => (
              <Card
                key={item.outfit_id}
                cardTitle={item.occasion}
                cardText={new Date(item.created_at)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
                selectedOutfit={item.is_selected}
                src={
                  item.tryon_image
                    ? item.tryon_image
                    : "https://images.pexels.com/photos/6899209/pexels-photo-6899209.jpeg"
                }
                alt={`outfit for ${item.occasion}`}
              />
            ))}
        </CardGrid>
      </div>
    </div>
  );
}

export default RecentlyGenerated;
