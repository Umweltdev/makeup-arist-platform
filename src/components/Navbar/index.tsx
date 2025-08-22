import {
    Menu,
    Sparkles,
    //User
    X
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"
import Button from "../Button"
import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/Signup"
import ForgetPassword from "@/pages/auth/ForgetPassword"

const Navbar = ({
    setActivePage,
    activePage,
}: {
    setActivePage: React.Dispatch<React.SetStateAction<string>>
    activePage: string
}) => {
    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            href: "/services",
        },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
        { name: "Dashboard", href: "/dashboard" },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openSigninModal, setSigninModal] = useState(false)
    const [openSignupModal, setSignupModal] = useState(false)
    const [openForgetPassword, setOpenForgetPassword] = useState(false)

    const navigate = useNavigate()
    return (
        <nav className="fixed top-0 w-full bg-[#3F6C54] z-40 shadow-sm">
            {openSigninModal && (
                <SignIn
                    onClose={() => setSigninModal(false)}
                    setSignupModal={setSignupModal}
                    setOpenForgetPassword={setOpenForgetPassword}
                />
            )}
            {openSignupModal && (
                <SignUp
                    onClose={() => setSignupModal(false)}
                    setSigninModal={setSigninModal}
                />
            )}
            {openForgetPassword && (
                <ForgetPassword
                    onClose={() => setOpenForgetPassword(false)}
                    setSignupModal={setSignupModal}
                />
            )}

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <Sparkles className="h-6 w-6 mr-2" />
                        <span className="text-xl font-bold">Glamify</span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((nav, index) => (
                            <button
                                key={index}
                                className={`
                                    ${activePage === nav.name && "text-[#BD9C87] font-bold"}
                                        ? 
                                        : " text-[#CCB2A2] hover:text-[#BD9C87] font-bold" cursor-pointer
                                `}
                                onClick={() => setActivePage(nav.name)}
                            >
                                {nav.name}
                            </button>
                        ))}
                        <Button
                            variant="border"
                            className="py-2!"
                            onClick={() => setSigninModal(true)}
                        >
                            Sign up
                        </Button>
                        <Button
                            variant="secondary"
                            className="py-2!"
                            onClick={() => setSigninModal(true)}
                        >
                            Sign in
                        </Button>
                        {/* <button
                            onClick={() => navigate("/")}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <User size={20} />
                        </button> */}
                    </div>
                    <button
                        className="md:hidden cursor-pointer text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (<X size={24}/>):(<Menu size={24} />)}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-green-1000 border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 ">
                        {navLinks.map((nav, index) => (
                            <button
                                key={index}
                                className={`
                                    ${activePage === nav.name && "text-[#BD9C87] font-bold"}
                                        ? 
                                        : " text-[#CCB2A2] hover:text-[#BD9C87] font-bold" cursor-pointer block w-full text-left px-3 py-2
                                `}
                                onClick={() => setActivePage(nav.name)}
                            >
                                {nav.name}
                            </button>
                        ))}
                        <div className="flex flex-col justify-center">
                            <Button
                                variant="border"
                                className=" w-fit text-center"
                                onClick={() => setSigninModal(true)}
                            >
                                Sign up
                            </Button>
                            <Button
                                variant="secondary"
                                className="mt-2 w-fit"
                                onClick={() => setSigninModal(true)}
                            >
                                Sign in
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {/* Back to Client View Button */}
            <button
                onClick={() => navigate("/admin/dashboard")}
                className="fixed top-12 right-4 bg-green-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 z-50"
            >
                Switch to Admin View
            </button>
        </nav>
    )
}

export default Navbar
