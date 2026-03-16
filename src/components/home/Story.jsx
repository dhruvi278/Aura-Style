import Fashion1 from "../../assets/home/Fashion_Story1.png";
import Fashion2 from "../../assets/home/Fashion_Story2.png";

const Story = () => {
  return (
    <section className="w-full bg-[#F7F4EF] flex justify-center items-center py-20 px-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:gap-20 gap-12 justify-between">
        <div className="flex-1">
          <div className="flex gap-1 items-start">
            <span className="playfair-display leading-15 text-[72px] lg:text-[96px] font-extrabold text-[#E59F17]/70">
              “
            </span>
            <div>
              <blockquote className="playfair text-[32px] lg:text-[36px] mb-4 leading-10">
                Style is a way to say who you are without having to speak.
              </blockquote>
              <cite className="work-sans text-[#C5A059] text-[12px] font-bold mb-10 not-italic block">
                — AuraStyle Manifesto
              </cite>
            </div>
            
          </div>
          
              <p className="work-sans text-[18px] text-[#1A1A18]/80 mb-6">
                AuraStyle was born at the intersection of haute couture and
                neural engineering. We believe that true luxury is not just what
                you wear, but the peace of mind that comes from knowing your
                wardrobe is perfectly aligned with your identity.
              </p>
              <p className="work-sans text-[18px] text-[#1A1A18]/80">
                Our mission is to democratize the luxury styling experience,
                providing everyone with a world-class fashion consultant that
                fits in their pocket.
              </p>
        </div>

        <div className="flex-1 flex gap-4">
          <img
            src={Fashion1}
            alt="Editorial fashion lookbook image"
            className="rounded-2xl w-1/2 object-cover"
          />

          <img
            src={Fashion2}
            alt="Styled outfit curated by AuraStyle AI"
            className="rounded-2xl w-1/2 object-cover self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
