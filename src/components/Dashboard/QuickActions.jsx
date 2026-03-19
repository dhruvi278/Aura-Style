import { Camera, Shirt, Sparkles } from "lucide-react";
import Action from "./Actions";
import { useNavigate } from "react-router-dom";

function QuickActions() {
    const navigate = useNavigate()
    return (
        <div  >

            <h2 className="text-[#1A1A18]/40 font-bold text-sm sm:text-base">
                QUICK ACTIONS
            </h2>


            <div className="flex flex-col md:flex-col lg:flex-row items-center gap-5 mt-5 justify-center">



                <Action
                    Icon={Camera}
                    actionName="Upload Your Selfie"
                    description="Refine your AI fashion model"
                    onClick={() => navigate('/profile')}
                />

                <Action
                    Icon={Shirt}
                    actionName="Upload Wardrobe"
                    description="Organize your digital closet"
                    onClick={() => navigate('/wardrobe')}
                />

                <Action
                    Icon={Sparkles}
                    actionName="Generate Outfit"
                    description="Personalized styling for you"
                    onClick={() => navigate('/generate_outfit')}
                />

            </div>
        </div>
    );
}

export default QuickActions;
