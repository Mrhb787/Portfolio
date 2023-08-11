import {createElement} from "react";

const animations = {
  drowning: "drowning",
};

export const DrowningText = ({text, variant, ...props}) => {
  const variantElement = createElement(
    variant,
    {className: "animation-drowning-content-text"},
    text
  );
  return (
    <div class={"animation-drowning-content " + props.className}>
      {variantElement}
      {variantElement}
    </div>
  );
};

const TextAnimated = ({text, animation, variant, ...props}) => {
  return animations.drowning === animation ? (
    <DrowningText text={text} variant={variant} {...props} />
  ) : (
    <div>{text}</div>
  );
};

export default TextAnimated;
