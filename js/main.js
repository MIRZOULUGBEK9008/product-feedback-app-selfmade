import loader from "./loader.js";

// Enable loader
loader(true);

window.onload = () => {
  // Disable loader
  loader(false);
};
