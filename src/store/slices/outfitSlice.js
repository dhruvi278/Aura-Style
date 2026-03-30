import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generateOutfitAPI, saveOutfitAPI } from "../../services/outfitService";

export const generateOutfit = createAsyncThunk(
    'outfit/generate',
    async(payload,{ rejectWithValue }) =>{
        try{
            const res = await generateOutfitAPI(payload);
            console.log(res);
            return res.data;
        } catch(err) {
            return rejectWithValue(err.response?.data?.detail || 'Generate failed');
        }
    }
);

export const saveOutfit = createAsyncThunk(
    'outfit/saveOutfit',
    async(outfitData,{ rejectWithValue }) => {
        try{
            const res = await saveOutfitAPI(outfitData);
            return res.data;
        } catch(err) {
            return rejectWithValue(err.response?.data?.detail || 'Save failed');
        }
    }
);


const outfitSlice = createSlice ({
    name:'outfit',
    initialState:{
        
        outfit:null,
        generatedOutfitId:null,
        tryonImage: null,
        loading:false,
        saving:false,
        saved:false,
        error:null,
        message:null,

    },
    reducers:{
        clearOutfit: (state) =>{
            state.outfit = null;
            state.error = null;
            state.saved = false;
            state.message = null;
            state.tryonImage = null;
        },
    },
    
    extraReducers:(builder) =>{
        builder
        //generateOutfit
        .addCase(generateOutfit.pending, (state) =>{
            state.loading = true;
            state.error = null;
            state.saved = false;
            state.outfit = null;
            state.message = null;
            state.tryonImage = null;
        })
        .addCase(generateOutfit.fulfilled,(state,action)=>{
            state.loading = false;
            state.outfit = action.payload.outfit;
            state.tryonImage = action.payload.tryon_image || null;
            state.generatedOutfitId = action.payload.outfit_id;
        })
        .addCase(generateOutfit.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })

        //saveOutfit
        .addCase(saveOutfit.pending, (state,action) =>{
            state.saving = true;
        })
        .addCase(saveOutfit.fulfilled, (state ) =>{
            state.saved = true;
            state.saving = false;
        })
        .addCase(saveOutfit.rejected, (state,action) =>{
            state.saving = false;
            state.error = action.payload;
        })
    },
});

export const { clearOutfit } = outfitSlice.actions;
export default outfitSlice.reducer;