// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";
import * as ResizeObserverModule from "resize-observer-polyfill";

global.React = React;
global.ResizeObserver = ResizeObserverModule.default;
global.URL.createObjectURL = jest.fn();
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

