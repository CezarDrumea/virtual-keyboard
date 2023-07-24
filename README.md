# Virtual Keyboard

Please read the instructions to run the app!

1. Make sure Node.js https://nodejs.org/en/download/current and Git https://git-scm.com/downloads are installed
2. `git clone git@github.com:CezarDrumea/virtual-keyboard.git`
3. `cd virtual-keyboard`
4. `npm i -g pnpm`
5. `pnpm i`
6. `pnpm run dev`

## Features:
- Press Shift or click Caps Lock to use upper characters
- Pressed or Clicked keys will stay in the Pressed state (blue) for 3 seconds and then fall back to the Released state (green)

## Limitatios:
- Some Pressed keys (Fn keys, tab and windows key) won't fall back to the Released state as they focus on other elements after pressing them

## Technologies:
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Redux Toolkit
- Styled Components
- Airbnb Eslint Config

### P.S. The app is in a work in progress (WIP) state, there might be some bugs
