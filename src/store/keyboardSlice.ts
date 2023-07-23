import { createSlice } from '@reduxjs/toolkit';

export interface KeyboardState {
  default: string[];
  pressed: string[];
  released: string[];
  shiftPressed: boolean;
  capsLockEnabled: boolean;
}

const initialState: KeyboardState = {
  default: [],
  pressed: [],
  released: [],
  shiftPressed: false,
  capsLockEnabled: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setShiftPressed: (state, { payload }: { payload: boolean }) => {
      state.shiftPressed = payload;
    },
    setCapsLockClicked: (state, { payload }: { payload: boolean }) => {
      state.capsLockEnabled = payload;
    },
  },
});

export const { setShiftPressed, setCapsLockClicked } = keyboardSlice.actions;

export default keyboardSlice.reducer;
