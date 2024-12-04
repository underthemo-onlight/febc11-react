import { PropTypes } from "prop-types";
import "./Button.css";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "yellow"]),
  bg: PropTypes.oneOf(["blue", "red", "yellow", "grey"]),
  onClick: PropTypes.func,
};

function Button({
  children,
  type = "button",
  bg,
  color,
  onClick: clickHandler,
}) {
  return (
    <button
      className={`button color-${bg}-${color}`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
