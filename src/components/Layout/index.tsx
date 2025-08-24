import Sidebar from "./Sidebar";
import { NavLink } from "react-router";
import { navLinks } from "./route";

const Layout=({children}:{children: React.ReactNode})=>{
    return(
        <div>
          <div className="hidden md:block overflow-y-auto h-[90%] ">
            <Sidebar/>
          </div>
            
            <main className="flex-1 md:ml-64 p-2 py-4 sm:p-6 mb-16 md:mb-0">
                {children}
            </main>
             {/* Mobile Bottom Navigation for Admin */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around py-2">
            {navLinks.map((nav, index)=>(
            
                     <NavLink to={nav.href} key={index} className={({ isActive }) => `${isActive ? "bg-green-100 text-green-1000":"hover:bg-gray-50"} flex flex-col items-center p-1 sm:p-2 transition-colors  `}>
                      {nav.icon}
                      
                {/* <span className="text-[11px]">{nav.name}</span> */}
                </NavLink>
                
            ))}
           
          </div>
        </div>
        </div>
    )
}

export default Layout;