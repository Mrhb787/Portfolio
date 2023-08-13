import {createElement} from "react";

const animations = {
  drowning: "drowning",
};

export const DrowningText = ({text, variant}) => {
  const variantElement = createElement(
    variant,
    {className: "animation-drowning-content-text"},
    text
  );
  return (
    <div className={"animation-drowning-content reveal"}>
      {variantElement}
      {variantElement}
    </div>
  );
};

const TextAnimated = ({text, animation, variant}) => {
  return animations.drowning === animation ? (
    <DrowningText text={text} variant={variant} />
  ) : (
    <div>{text}</div>
  );
};

export default TextAnimated;
