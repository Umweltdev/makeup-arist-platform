import "./button.css"

interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary"
}

const Button = ({ children, className, variant, ...rest }: buttonInterface) => {
    return (
            <button
                className={`    rounded-full text-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer btn--${variant} ${className}`}
                {...rest}
            >
                {children}
            </button>
            
    )
}

export default Button