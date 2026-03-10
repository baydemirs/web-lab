const variantClasses = {
  primary: 'bg-primary text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500',
  secondary: 'bg-secondary text-white hover:bg-blue-800 dark:bg-gray-600 dark:hover:bg-gray-500',
  danger: 'bg-error text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600',
  ghost: 'bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700',
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg font-medium transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
