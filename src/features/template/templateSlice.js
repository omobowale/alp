import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: 0, 
  formData: []
};


export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setProgress : (state, action) => {
      state.progress = action.payload
    },
    setFormData : (state, action) => {
      state.formData = action.payload
    },
  },
});

export const { setProgress, setFormData } = templateSlice.actions;



export default templateSlice.reducer;
