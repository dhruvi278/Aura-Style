import { useDispatch, useSelector } from "react-redux"
import { selectActiveCategory, selectDeleting, selectFilteredItems, selectUploading, selectWardrobeError, selectWardrobeLoading, selectWardrobeTotal } from "../store/selectors/wardrobeSelectors";
import { deleteItem, fetchItems, setActiveCategory, uploadItem } from "../store/slices/wardrobeSlice";

export const useWardrobe = () => {
    const dispatch = useDispatch();
    return{
        items : useSelector(selectFilteredItems),
        loading: useSelector(selectWardrobeLoading),
        uploading: useSelector(selectUploading),
        deleting: useSelector(selectDeleting),
        error: useSelector(selectWardrobeError),
        activeCategory: useSelector(selectActiveCategory),
        total: useSelector(selectWardrobeTotal),

        fetch: (params) => dispatch(fetchItems(params)),
        upload: (payload) =>dispatch(uploadItem(payload)),
        delete: (id) =>dispatch(deleteItem(id)),
        setCategory: (category) => dispatch(setActiveCategory(category)),
    };
};