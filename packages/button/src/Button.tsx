import React, { forwardRef, HTMLAttributes } from "react";

const NAME = "Button";

const Button = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
    >
      {children}
    </button>
  ),
);

Button.displayName = NAME;

export { Button };
