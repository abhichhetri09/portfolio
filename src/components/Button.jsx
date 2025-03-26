import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // For conditional class merging

const variantClasses = {
  primary: "bg-tealGreen-900 hover:bg-tealGreen-800 text-white",
  secondary: "bg-gray-800 hover:bg-gray-700 text-white",
  danger: "bg-red-900 hover:bg-red-800 text-white",
  success: "bg-green-900 hover:bg-green-800 text-white",
  outline:
    "border border-tealGreen-900 text-tealGreen-900 hover:bg-tealGreen-100",
  ghost: "text-tealGreen-900 hover:bg-tealGreen-100",
};

const sizeClasses = {
  sm: "text-xs p-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "rounded font-medium transition duration-300",
        variantClasses[variant],
        sizeClasses[size],
        { "opacity-50 cursor-not-allowed": disabled }, // Handle disabled state
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "outline",
    "ghost",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
