import 'jest-preset-angular';
declare var global;
const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn()
});

global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
