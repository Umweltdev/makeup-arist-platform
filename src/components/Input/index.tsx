import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control?: string
    prefixIcon?: React.JSX.Element
    suffixIcon?: React.JSX.Element
    inputClassName?: string
}

const Input = ({
    prefixIcon,
    suffixIcon,
    className,
    inputClassName,
    ...rest
}: InputProps) => {
    return (
        <div
            className={`  flex items-center  border-1  h-12  rounded-[24px] ${className ? className:"md:h-14 border-gray-100"}`}
        >
            {prefixIcon}
            <input
                className={`w-full outline-none input bg-transparent  ${inputClassName}`}
                {...rest}
                
                
            />
            {/* <span> */}
            {suffixIcon}
            {/* </span> */}
        </div>
    )
}
export default Input
