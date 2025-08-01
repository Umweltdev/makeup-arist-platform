import { Calendar, Palette, User, CreditCard, CalendarCheck, Home } from 'lucide-react';


 export const navLinks = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <Home size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0' />   },
    { name: "Bookings", href: "/admin/bookings", icon: <Calendar size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0' /> },
    { name: "Clients", href: "/admin/clients", icon:<User size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0' /> },
    {
        name: "Services",
        href: "/admin/services",
        icon: <Palette size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0'/>
    },
    { name: "Availability", href: "/admin/availability", icon: <CalendarCheck size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0' /> },
    { name: "Payments", href: "/admin/payments", icon: <CreditCard size={20} className='w-6 md:w-auto h-6 md:h-auto mb-1 md:mb-0' /> },
    //{ name: "Settings", href: "/admin/settings", iconElement: SettingsIcon },
   
]