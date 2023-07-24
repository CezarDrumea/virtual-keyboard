export const keyboardLayout = [
  ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
  [
    'print screen',
    'scroll lock',
    'pause',
    'insert',
    'home',
    'page up',
    'delete',
    'end',
    'page down',
    'num lock',
  ],
];

interface KeysInterface {
  [key: string]: string;
}

export const pressedKeysObject: KeysInterface = {
  esc: 'Escape',
  control: 'Control',
  shift: 'Shift',
  'caps lock': 'CapsLock',
  return: 'Enter',
  delete: 'Backspace',
  option: 'Alt',
  'print screen': 'PrintScreen',
  'scroll lock': 'ScrollLock',
  pause: 'Pause',
  insert: 'Insert',
  home: 'GoHome',
  'page up': 'PageUp',
  'page down': 'PageDown',
  'num lock': 'NumLock',
  end: 'End',
  ' ': ' ',
};

export const clickedKeysObject: KeysInterface = {
  tab: 'Tab',
  fn: 'Fn',
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12',
  command: 'Meta',
};

export const extendedKeysObject: KeysInterface = {
  ...pressedKeysObject,
  ...clickedKeysObject,
};
