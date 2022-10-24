import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};


export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    
  },
});

export const { } = templateSlice.actions;



export default templateSlice.reducer;
