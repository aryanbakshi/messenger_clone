import { IconType } from 'react-icons';
import React from "react";
import Button from "@/app/components/Button";

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onCLick
}) => {
    return (
        <Button
            type="button"
            onClick={onCLick}
            className="
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-gray-500
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                hover:bg-gray-50
                focus:outline-offset-0
                "
        >
            <Icon/>

        </Button>
    );
}

export default AuthSocialButton;