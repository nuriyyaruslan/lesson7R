import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import galleryApi from '../../common/apis/galleryApi';

const initialState = {
    photos: [],
    isLoading: false,
}

export const fetchAsyncGallery = createAsyncThunk(
    "photos/fetchAsyncGallery",
    async () => {
        const response = await galleryApi.get(`photos`);
        return response.data;
    }
)

export const gallerySlice = createSlice({
    name:'gallery',
    initialState,
    extraReducers:{
        [fetchAsyncGallery.pending] : (state) => {
            state.isLoading = true
        },
        [fetchAsyncGallery.fulfilled] : (state, action) => {
            state.photos = action.payload
        },
        [fetchAsyncGallery.rejected] : (state) => {
            state.isLoading = false
        }
    }
})

export default gallerySlice.reducer;