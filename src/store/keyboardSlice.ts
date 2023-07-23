import { createSlice } from '@reduxjs/toolkit';

export interface KeyboardState {
  default: string[];
  pressed: string[];
  released: string[];
  shiftPressed: boolean;
  capsLockClicked: boolean;
}

const initialState: KeyboardState = {
  default: [],
  pressed: [],
  released: [],
  shiftPressed: false,
  capsLockClicked: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setShiftStatus: (state, { payload }) => {
      state.shiftPressed = payload as boolean;
    },
  },
});

export const { setShiftStatus } = keyboardSlice.actions;

export default keyboardSlice.reducer;
