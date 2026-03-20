import { Cpu, Leaf, Sparkles } from "lucide-react";
import React from "react";

const WorkSection = () => {
  return (
    <section id="workSection" className="w-full bg-[#EDE9E2]/80 flex justify-center items-center py-20 px-6">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h2 className="playfair-display text-[36px]">The Aura Experience</h2>
          <p className="work-sans text-[14px] sm:text-[18px] text-[#1A1A18]/60">
            Sophisticated Logic. Impeccable Style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card-1 */}
          <article className="bg-[#EDE9E2] rounded-2xl p-5 md:p-10 flex flex-col gap-6">
            <div className="text-[#C5A059]">
              <Sparkles size={30} />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] playfair-display font-bold">
                Curation
              </h3>
              <p className="work-sans text-[16px] text-[#1A1A18]/70">
                Every look is handpicked by AI trained on thousands of
                silhouettes — aligned to your lifestyle rhythm, and evolving
                aesthetic identity.
              </p>
            </div>
          </article>

          <article className="bg-[#EDE9E2] rounded-2xl p-5 md:p-10 flex flex-col gap-6">
            <div className="text-[#C5A059]">
              <Cpu size={30} />
            </div>

            {/* Card-2 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] playfair-display font-bold">
                Intelligence
              </h3>
              <p className="work-sans text-[16px] text-[#1A1A18]/70">
                AuraStyle learns continuously. The more you interact, the
                sharper its eye becomes — surfacing outfits that feel
                effortless, not algorithmic.
              </p>
            </div>
          </article>

          {/* Card-3 */}
          <article className="bg-[#EDE9E2] rounded-2xl p-5 md:p-10 flex flex-col gap-6">
            <div className="text-[#C5A059]"><Leaf size={30} /></div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] playfair-display font-bold">Conscious Dressing</h3>
              <p className="work-sans text-[16px] text-[#1A1A18]/70">
                Maximize what you already own. AuraStyle identifies wardrobe
                gaps and only recommends pieces that earn their place in your
                closet.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
