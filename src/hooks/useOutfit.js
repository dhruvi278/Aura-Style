import { useDispatch, useSelector } from "react-redux"
import {  selectGeneratedOutfitId, selectOutfit, selectOutfitError, selectOutfitLoading, selectOutfitSaved, selectOutfitSaving, selectTryonImage } from "../store/selectors/outfitSelectors";
import { clearOutfit, generateOutfit, saveOutfit } from "../store/slices/outfitSlice";

export const useOutfit = () =>{
    const dispatch = useDispatch();
    return{
        outfit:useSelector(selectOutfit),
        tryonImage: useSelector(selectTryonImage),
        loading: useSelector(selectOutfitLoading),
        saving: useSelector(selectOutfitSaving),
        error: useSelector(selectOutfitError),
        saved: useSelector(selectOutfitSaved),
        generatedOutfitId: useSelector(selectGeneratedOutfitId),

        generate: (payload) => dispatch(generateOutfit(payload)),
        save: (saveData) => dispatch(saveOutfit(saveData)),
        clear: () => dispatch(clearOutfit()),
    }
}