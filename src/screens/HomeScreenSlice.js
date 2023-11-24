// slices/HomeScreenSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../service/firebase';


// Form bilgilerini Firestore'a eklemek için async thunk oluşturun
export const addFormData = createAsyncThunk('form/addFormData', async (formData) => {
  const docRef = await addDoc(collection(db, 'forms'), formData);
  return { id: docRef.id, ...formData };
});

const HomeScreenSlice = createSlice({
  name: 'form',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFormData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFormData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(addFormData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default HomeScreenSlice.reducer;
