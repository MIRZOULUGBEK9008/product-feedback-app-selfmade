import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const { loaderWrapperFlex, loaderWrapperOpacity, loaderTimeout } =
  cssClassModifiers;

const loader = (value = true) => {
  if (value) {
    elLoader.classList.add(loaderWrapperFlex);
    setTimeout(() => {
      elLoader.classList.add(loaderWrapperOpacity);
    }, loaderTimeout);
  } else {
    elLoader.classList.remove(loaderWrapperOpacity);
    elLoader.ontransitionend = ({ target }) => {
      target === elLoader && elLoader.classList.remove(loaderWrapperFlex);
    };
  }
};

export default loader;
