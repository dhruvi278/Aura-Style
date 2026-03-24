import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteItemAPI, fetchItemsAPI, uploadItemAPI } from "../../services/wardrobeService";

export const fetchItems = createAsyncThunk(
    'wardrobe/fetchItems',
    async (params,{rejectedWithValue}) =>{
        try{
            const res = await fetchItemsAPI(params);
            console.log('Fetch data: ' , res.data.total);
            
            return res.data;

        } catch(err){
            console.log("FETCH ERROR:", err.response);
            return rejectedWithValue(err.response?.data?.detail || 'Failed to load wardrobe');
        }
    }
);
export const uploadItem = createAsyncThunk(
    'wardrobe/upload',
    async({file}, {rejectedWithValue}) =>{
        try{
            const formData = new FormData();
            formData.append('file',file);
            // formData.append('category',category);
            // formData.append('name',name);
            console.log("UPLOAD RESPONSE:");
            
            const res = await uploadItemAPI(formData);
            return res.data;
        } catch(err){
            console.log
            return rejectedWithValue(err.response?.data?.detail || 'Upload failed');
        }
    }
);

export const deleteItem = createAsyncThunk(
    'wardrobe/delete',
    async(itemId,{rejectedWithValue}) =>{
        try{
            await deleteItemAPI(itemId);
            console.log(itemId);
            return itemId;
        } catch(err){
            return rejectedWithValue(err.response?.detail || 'Delete Failed');
        }
    }
);

const wardrobeSlice = createSlice({
    name:'wardrobe',
    initialState :{
        items : [],
        total: 0,  
        loading: false,
        uploading: false,
        deleting:null,
        error: null,
        activeCategory:'all',
    },
    reducers:{
        setActiveCategory:(state,action) =>{
            state.activeCategory = action.payload    
        },
        clearWardrobeError:(state) =>{
            state.error = null;
        }
    },
    extraReducers:(builder) =>{
        builder
        //fetch
        .addCase(fetchItems.pending, (s) => {s.loading = true; s.error = null; })
        .addCase(fetchItems.fulfilled, (s,a) =>{
            s.loading = false; 
            s.items = a.payload?.items || [] ;
            s.total = a.payload?.total || 0;   // <-- store total
           })
        .addCase(fetchItems.rejected, (s,a) =>{s.loading = false, s.error = a.payload; })

        //upload
        // .addCase(uploadItem.pending, (s) =>{s.uploading = true, s.error = null; })
        // .addCase(uploadItem.fulfilled, (s,a) =>{
        //     const newIem = a.payload.data || a.payload
        //     if(!Array.isArray(s.items)){
        //         s.items = [];
        //     }
        //     s.items.unshift(newIem);
            
        // })
        .addCase(uploadItem.pending, (s) => {
        s.uploading = true;
        s.error = null;
        })

        .addCase(uploadItem.fulfilled, (s, a) => {
        s.uploading = false;
        const newItem = a.payload?.data || a.payload;

        if (!Array.isArray(s.items)) s.items = [];

        s.items.unshift(newItem); // keeps same shape
    })
        .addCase(uploadItem.rejected, (s,a) =>{s.uploading = false, s.error = a.payload; })

        //deleting
        .addCase(deleteItem.pending, (s,a) =>{s.deleting = a.meta.arg})
        .addCase(deleteItem.fulfilled, (s,a) =>{
            s.deleting = null;
            s.items = s.items.filter((item) => item.c_id !== a.payload);
        })
        .addCase(deleteItem.rejected, (s,a) =>{s.deleting = null, s.error = a.payload})
    },
});

export const {setActiveCategory, clearWardrobeError} = wardrobeSlice.actions;
export default wardrobeSlice.reducer;