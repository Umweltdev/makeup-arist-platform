import { Menu, Sparkles, User } from "lucide-react"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router"

const Navbar = () => {
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
    const navigate = useNavigate()
    return (
        <nav className="fixed top-0 w-full bg-white z-40 shadow-sm">
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
                            <NavLink
                                to={nav.href}
                                key={index}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-gray-900"
                                        : " text-gray-700 hover:text-gray-900"
                                }
                            >
                                {nav.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={() => navigate("/")}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <User size={20} />
                        </button>
                    </div>
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((nav, index) => (
                            <NavLink
                                to={nav.href}
                                key={index}
                                className={({ isActive }) =>
                                    `${isActive ? "text-gray-900" : " text-gray-700 hover:text-gray-900"} block w-full text-left px-3 py-2  `
                                }
                            >
                                {nav.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
            {/* Back to Client View Button */}
            <button
                onClick={() => navigate("/admin/dashboard")}
                className="fixed top-12 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 z-50"
            >
                Switch to Admin View
            </button>
        </nav>
    )
}

export default Navbar
