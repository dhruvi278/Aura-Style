import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteItemAPI, fetchItemsAPI, fetchOverViewAPI, uploadItemAPI } from "../../services/wardrobeService";

export const fetchItems = createAsyncThunk(
    'wardrobe/fetchItems',
    async (params,{rejectWithValue}) =>{
        try{
            const res = await fetchItemsAPI(params);
            console.log('Fetch data: ' , res.data.total);
            
            return res.data;

        } catch(err){
            console.log("FETCH ERROR:", err.response);
            return rejectWithValue(err.response?.data?.detail || 'Failed to load wardrobe');
        }
    }
);

export const uploadItem = createAsyncThunk(
  'wardrobe/upload',
  async ({ file}, { rejectWithValue }) => {
    try {

      const formData = new FormData();
      formData.append('file', file);
      const res = await uploadItemAPI(formData);
      return res.data;
    } catch (err) {
      
      return rejectWithValue(err.response?.data?.detail || err.message || 'Upload failed');
    }
  }
);
export const deleteItem = createAsyncThunk(
    'wardrobe/delete',
    async(itemId,{rejectWithValue}) =>{
        try{
            await deleteItemAPI(itemId);
            console.log(itemId);
            return itemId;
        } catch(err){
            return rejectWithValue(err.response?.detail || 'Delete Failed');
        }
    }
);

export const fetchOverView = createAsyncThunk(
    'wardrobe/overview',
    async(_, {rejectWithValue}) =>{
        try{
            const res = await fetchOverViewAPI();
            return res.data;
        } catch(err) {
            return rejectWithValue(err.response?.detail || 'Fail to load overview');
        }
    }
)

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
        optimisticItem: null,
        justUploaded:false,
        overview:{
            total:0,
            top: 0,
            bottom: 0,
            accessory: 0,
            footwear:0
        },
        overViewloading: false,
        searchQuery:'',
    },
    reducers:{
        setActiveCategory:(state,action) =>{
            state.activeCategory = action.payload    
        },
        clearWardrobeError:(state) =>{
            state.error = null;
        },
        setSearchQuery: (state,action) =>{
            state.searchQuery = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        //fetch
        .addCase(fetchItems.pending, (state) => {state.loading = true; state.error = null; })
        .addCase(fetchItems.fulfilled, (state,action) =>{
            state.loading = false; 
            state.items = action.payload?.items || [] ;
            state.total = action.payload?.total || 0;   
            state.justUploaded = false
           })
        .addCase(fetchItems.rejected, (state,action) =>{state.loading = false; state.error = action.payload; })

        //upload
        
        .addCase(uploadItem.pending, (state,action) => {
        state.uploading = true;
        state.error = null;
         const file = action.meta.arg.file;
        state.optimisticItem = {
          c_id:              'temp-' + Date.now(),
          image_url:         URL.createObjectURL(file),  
          short_description: 'Analyzing...',
          category:          'uploading...',
          isOptimistic:      true,   
        };
        state.items.unshift(state.optimisticItem);  
        state.total = state.total + 1;             

        })

        .addCase(uploadItem.fulfilled, (state, action) => {
        state.uploading = false;
        state.optimisticItem = null;
        state.justUploaded =  true;
        state.items = state.items.map((item) =>
        item.isOptimistic
            ? { ...item, c_id: action.payload.c_id, isOptimistic: false }  
            : item
            );
        
        })
        .addCase(uploadItem.rejected, (state,action) =>{
            
            state.uploading = false;
        
            state.items = state.items.filter((item) => !item.isOptimistic);
            state.total = state.total - 1;   
            state.error = action.payload;
            state.optimisticItem = null;
        })

        //deleting
        .addCase(deleteItem.pending, (state,action) =>{state.deleting = action.meta.arg})
        .addCase(deleteItem.fulfilled, (state,action) =>{
            state.deleting = null;
            state.items = state.items.filter((item) => item.c_id !== action.payload);
            state.total = Math.max(0,state.total-1);
            // state.overview.total = Math.max(0,state.overview.total - 1);

        })
        .addCase(deleteItem.rejected, (state,action) =>{state.deleting = null; state.error = action.payload})

        //overview
        .addCase(fetchOverView.pending, (state) => {state.overViewloading = true; })
        .addCase(fetchOverView.fulfilled, (state,action) =>{
            state.overViewloading = true;
            state.overview = {
                total: action.payload.total || 0,
                top: action.payload.categories?.top || 0,
                bottom: action.payload.categories?. bottom || 0,
                accessory: action.payload.categories?.accessory || 0,
                footwear: action.payload.categories?.footwear || 0,
            };
        })
        .addCase(fetchOverView.rejected, (state) => {state.overViewloading = false; })
    },
});

export const {setActiveCategory, clearWardrobeError, setSearchQuery} = wardrobeSlice.actions;
export default wardrobeSlice.reducer;