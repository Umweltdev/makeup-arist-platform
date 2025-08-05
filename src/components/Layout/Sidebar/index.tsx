import { User } from "lucide-react"
import { NavLink } from "react-router"

import { navLinks } from "../route"

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg ">
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <User size={24} className="text-gray-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Sophia</h3>
                        <p className="text-sm text-gray-500">Makeup Artist</p>
                    </div>
                </div>

                <nav className="space-y-2">
                    {navLinks.map((nav, index) => (
                        <NavLink
                            to={nav.href}
                            key={index}
                            className={({ isActive }) =>
                                `${isActive ? "bg-green-50 text-green-600" : "hover:bg-gray-50"} w-full flex items-center space-x-4 gap-2 px-4 py-3 rounded-lg transition-colors  `
                            }
                        >
                            {nav.icon}

                            {nav.name}
                        </NavLink>
                    ))}
                    
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
