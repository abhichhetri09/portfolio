import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // For conditional class merging
import { Loader } from "./Loader";

const variantClasses = {
  primary: "bg-tealGreen-900 hover:bg-tealGreen-800 text-white",
  secondary: "bg-gray-800 hover:bg-gray-700 text-white",
  danger: "bg-red-900 hover:bg-red-800 text-white",
  success: "bg-green-900 hover:bg-green-800 text-white",
  outline:
    "border border-tealGreen-900 text-tealGreen-900 hover:bg-tealGreen-100",
  ghost: "text-tealGreen-700 hover:bg-tealGreen-800 hover:text-white",
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
  title,
  loading,
  onFocus,
  onBlur,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "rounded font-medium transition duration-300 flex items-center justify-center gap-2",
        variantClasses[variant],
        sizeClasses[size],
        {
          "opacity-50 cursor-not-allowed": disabled || loading, // Handle disabled state
        },
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {loading ? <Loader /> : children || title}
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
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export { Button };
