export const selectAllItems = (state) => state.wardrobe.items;
export const selectWardrobeLoading = (state) => state.wardrobe.loading;
export const selectUploading = (state) => state.wardrobe.uploading;
export const selectDeleting = (state) => state.wardrobe.deleting;
export const selectWardrobeError = (state) => state.wardrobe.error;
export const selectActiveCategory = (state) => state.wardrobe.activeCategory; 
export const selectWardrobeTotal = (state) => state.wardrobe.total;

export const selectFilteredItems = (state) =>{
    const { items, activeCategory, } =  state.wardrobe;
    console.log(items);
    // console.log(total);

    return activeCategory == 'all'
    ? items
    :items.filter((item) => item.category === activeCategory);

}