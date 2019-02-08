import 'jest-preset-angular';
declare var global;
const { Response, Request, Headers, fetch } = require('whatwg-fetch');
// global.Response = Response;
// global.Request = Request;
// global.Headers = Headers;
// global.fetch = fetch;
const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn()
});

global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
