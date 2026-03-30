import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InquiryAPI } from "../../services/supportService";

// export const inquiry = createAsyncThunk(
//     'support/inquiry',
//     async(inquiryMessage , { rejectWithValue }) => {
//         try{
//             const res = await InquiryAPI(inquiryMessage);
//             return res.data;
//         } catch(err) {
//             return rejectWithValue(err.response?.data?.detail || 'Failed in submit the inquiry!');
//         }
//     }
// );

export const inquiry = createAsyncThunk(
    'support/inquiry',
    async (inquiryMessage, { rejectWithValue }) => {
        try {
            const res = await InquiryAPI(inquiryMessage);
            return res.data;
        } catch (err) {
            // FastAPI 422 returns { detail: [ {type, loc, msg, input} ] }
            const detail = err.response?.data?.detail;

            if (Array.isArray(detail)) {
                // extract first validation error message
                return rejectWithValue(detail[0]?.msg || 'Validation failed');
            }

            return rejectWithValue(
                typeof detail === 'string'
                    ? detail
                    : 'Failed to submit inquiry'
            );
        }
    }
);
const inquirySlice = createSlice({
    name:'support',
    initialState:{
        message:null,
        sending:false,
        error:null,
    },
    reducers:{
        clearMessage:(state) =>{
            state.message = null;
            state.sending = false;
            state.error = null;
        },
    },
    extraReducers:(builder) =>{
        builder

        .addCase(inquiry.pending, (state) =>{
            state.sending =true;
        })
        .addCase(inquiry.fulfilled, (state,action) =>{
            state.sending = false;
            state.message = action.payload;
        })
        .addCase(inquiry.rejected ,(state,action) =>{
            state.sending = false;
            state.error = action.payload
        })
    }
})


export const { clearMessage } = inquirySlice.actions;
export default inquirySlice.reducer;