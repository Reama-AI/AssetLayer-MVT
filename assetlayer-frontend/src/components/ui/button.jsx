import { forwardRef } from "react"

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "hover:bg-primary/10 text-primary",
  link: "text-primary underline-offset-4 hover:underline"
}

const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10"
}

export const Button = forwardRef(({ 
  className = "",
  variant = "primary",
  size = "default",
  asChild = false,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  
  return (
    <Comp
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        ring-offset-background transition-colors
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"