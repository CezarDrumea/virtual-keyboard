# Virtual Keyboard

Please read the instructions to run this app!

1. Make sure Node.js https://nodejs.org/en/download/current and Git https://git-scm.com/downloads are installed.
2. `git clone git@github.com:CezarDrumea/virtual-keyboard.git` or `git clone https://github.com/CezarDrumea/virtual-keyboard.git`
3. `cd virtual-keyboard`
4. `npm i -g pnpm`
5. `pnpm i`
6. `pnpm run dev`

## Features:
- Press (or click) Shift or Caps Lock to use upper characters.
- Pressed (or clicked) keys will stay in the Pressed state (blue) for 3 seconds and then fall back to the Released state (green).
- If you don't press (or click) something in 60 seconds, all Pressed keys will go from Released to Default state.

## Limitatios:
- Some Pressed keys (Fn and fn keys, tab and windows key) won't fall back to the Released state as they focus on other elements after pressing them. Besides this, clicking on them works fine.
- Clicking on Caps Lock and then clicking on Shift or vice versa will negate the effect of the other key. Other than that, pressing them simultaneously works fine.

## Technologies:
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Redux Toolkit
- Styled Components
- Airbnb Eslint Config

### P.S. This app is in a work in progress (WIP) state and there might be some bugs. 
If you find some of this nasty creatures, I'll be grateful if you'd open a bug request.
