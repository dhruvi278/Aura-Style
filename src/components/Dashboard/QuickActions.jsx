import { Camera, Shirt, Sparkles } from "lucide-react";
import Action from "./Actions";

function QuickActions(){
    return(
        <div>
            <h2 className="text-[#1A1A18]/40 font-bold">QUICK ACTIONS</h2>
            <div className="flex justify-center gap-10.5 mt-5 ">
                <div>
                    <Action
                    Icon={Camera} 
                    actionName="Uplaod Your Selfie" 
                    description="Refine your AI fashion mode"/>
                </div>
                <div>
                    <Action
                    Icon={Shirt} 
                    actionName="Upload Wardrobe" 
                    description="Organize your digital closet"/>
                </div>
                <div>   
                    <Action
                    Icon={Sparkles} 
                    actionName="Generate Outfit"
                    description="Personalized styling for you"/>
                </div>
            </div>
        </div>
    )
}

export default QuickActions;
