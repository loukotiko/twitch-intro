requirejs.config({
  paths: {
    babel: "https://unpkg.com/requirejs-react-jsx@1.0.2/babel-5.8.34.min",
    jsx: "https://unpkg.com/requirejs-react-jsx@1.0.2/jsx",
    text: "https://unpkg.com/requirejs-text@2.0.15/text"
  }
});

requirejs(["jsx!./src/App"], function(App) {});
