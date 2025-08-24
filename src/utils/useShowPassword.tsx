import { useState } from 'react';
import {
    Eye,
    EyeOff
} from "lucide-react"
const useShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const displayPasswordIcon = () => {
        if (showPassword) {
            return (
                <EyeOff
                    className="text-[#6F6F6F] text-lg cursor-pointer"
                    onClick={handleShowPassword}
                />
            );
        } else {
            return (
                <Eye
                    className="text-[#6F6F6F] text-lg cursor-pointer"
                    onClick={handleShowPassword}
                />
            );
        }
    };

    return {
        showPassword,
        displayPasswordIcon,
    };
};


export default useShowPassword;