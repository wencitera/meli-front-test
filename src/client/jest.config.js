module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(png|jpg|jpeg)$": "<rootDir>/__mocks__/imageMock.js"
    }
  };