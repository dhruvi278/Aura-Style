export const selectAllItems = (state) => state.wardrobe.items;
export const selectWardrobeLoading = (state) => state.wardrobe.loading;
export const selectUploading = (state) => state.wardrobe.uploading;
export const selectDeleting = (state) => state.wardrobe.deleting;
export const selectWardrobeError = (state) => state.wardrobe.error;
export const selectActiveCategory = (state) => state.wardrobe.activeCategory; 
export const selectWardrobeTotal = (state) => state.wardrobe.total;
export const selectJustUploaded = (state) => state.wardrobe.justUploaded;
export const selectOverView = (state) => state.wardrobe.overview;
export const selectOverviewLoading = (state) =>state.wardrobe.overViewloading;
export const selectSearchQuery = (state) => state.wardrobe.searchQuery;

export const selectFilteredItems = (state) =>{
    const { items, activeCategory,searchQuery } =  state.wardrobe;
    // console.log(items);

    let filtered = activeCategory == 'all'
    ? items
    :items.filter((item) => item.category === activeCategory);

    //search
    if(searchQuery?.trim()){
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter((item) =>item.short_description?.toLowerCase().includes(q));
    }
    return filtered;

}