const triggerKeyboardEvent = (event: string, type: string, status: boolean): void => {
  window.dispatchEvent(new KeyboardEvent(event, { [type]: status }));
};

export default triggerKeyboardEvent;
