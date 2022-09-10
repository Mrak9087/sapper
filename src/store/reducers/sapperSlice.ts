import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISapperStore {
  lengthX: number;
  lengthY: number;
  countBomb: number;
  widthBoard: number;
}

const sapperDefault: ISapperStore = {
  lengthX: 9,
  lengthY: 9,
  countBomb: 10,
  widthBoard: 500,
  // 500,
};

const sapperSlice = createSlice({
  name: 'sapper',
  initialState: sapperDefault,
  reducers: {
    setLevel(state, action: PayloadAction<ISapperStore>) {
      state.lengthX = action.payload.lengthX;
      state.lengthY = action.payload.lengthY;
      state.countBomb = action.payload.countBomb;
    },
  },
});

export const { setLevel } = sapperSlice.actions;

export default sapperSlice.reducer;
