import { createSlice } from '@reduxjs/toolkit';

export interface KeyboardStateInterface {
  keysToRepeat: string[];
  pressedKeys: {
    [key: string]: string;
  };
  releasedKeys: {
    [key: string]: string;
  };
  shiftPressed: boolean;
  capsLockEnabled: boolean;
}

const initialState: KeyboardStateInterface = {
  keysToRepeat: [],
  pressedKeys: {},
  releasedKeys: {},
  shiftPressed: false,
  capsLockEnabled: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setKeyModifier: (
      state,
      {
        payload: { type, stateProp },
      }: { payload: { type: boolean; stateProp: 'shiftPressed' | 'capsLockEnabled' } }
    ) => {
      state[stateProp] = type;
    },
    setTrigeredKeys: (
      state,
      {
        payload: { keyName, keyEventName, stateProp },
      }: {
        payload: {
          keyName: string;
          keyEventName: string;
          stateProp: 'pressedKeys' | 'releasedKeys';
        };
      }
    ) => {
      delete state[stateProp === 'pressedKeys' ? 'releasedKeys' : 'pressedKeys'][keyName];
      state[stateProp][keyName] = keyEventName;
    },
    emptyReleasedKeys: (state) => {
      const releasedKeysArray = Object.keys(state.releasedKeys);
      releasedKeysArray.forEach((releasedKey) => delete state.releasedKeys[releasedKey]);
    },
    setKeysToRepeat: (state, { payload }: { payload: string }) => {
      state.keysToRepeat.push(payload);
    },
  },
});

export const { setKeyModifier, setTrigeredKeys, emptyReleasedKeys, setKeysToRepeat } =
  keyboardSlice.actions;

export default keyboardSlice.reducer;
