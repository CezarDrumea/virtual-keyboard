import { createSlice } from '@reduxjs/toolkit';

export interface KeyboardState {
  pressedKeys: {
    [key: string]: string;
  };
  releasedKeys: {
    [key: string]: string;
  };
  shiftPressed: boolean;
  capsLockEnabled: boolean;
}

const initialState: KeyboardState = {
  pressedKeys: {},
  releasedKeys: {},
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
    setPressedKeys: (
      state,
      { payload: { keyName, keyEventName } }: { payload: { keyName: string; keyEventName: string } }
    ) => {
      delete state.releasedKeys[keyName];
      state.pressedKeys[keyName] = keyEventName;
    },
    setReleasedKeys: (
      state,
      { payload: { keyName, keyEventName } }: { payload: { keyName: string; keyEventName: string } }
    ) => {
      delete state.pressedKeys[keyName];
      state.releasedKeys[keyName] = keyEventName;
    },
    emptyReleasedKeys: (state) => {
      const releasedKeysArray = Object.keys(state.releasedKeys);
      releasedKeysArray.forEach((releasedKey) => delete state.releasedKeys[releasedKey]);
    },
  },
});

export const {
  setShiftPressed,
  setCapsLockClicked,
  setReleasedKeys,
  setPressedKeys,
  emptyReleasedKeys,
} = keyboardSlice.actions;

export default keyboardSlice.reducer;
