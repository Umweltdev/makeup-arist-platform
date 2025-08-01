import { Calendar, User, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
    const [appointmentTab, setAppointmentTab] = useState("single")
    const navigate=useNavigate()
    const upcomingAppointments = [
        {
            id: 1,
            client: "Olivia Harper",
            service: "Bridal Makeup",
            date: "July 20, 2024",
            time: "10:00 AM",
            status: "Confirmed",
        },
        {
            id: 2,
            client: "Chloe Bennett",
            service: "Evening Glam",
            date: "July 21, 2024",
            time: "2:00 PM",
            status: "Confirmed",
        },
        {
            id: 3,
            client: "Isabella Clark",
            service: "Photoshoot Makeup",
            date: "July 22, 2024",
            time: "11:00 AM",
            status: "Pending",
        },
    ]

    const recentBookings = [
        {
            id: 1,
            client: "Ava Turner",
            service: "Bridal Makeup",
            date: "July 15, 2024",
            time: "10:00 AM",
            status: "Completed",
        },
        {
            id: 2,
            client: "Mia Carter",
            service: "Evening Glam",
            date: "July 16, 2024",
            time: "2:00 PM",
            status: "Completed",
        },
        {
            id: 3,
            client: "Emily Cooper",
            service: "Photoshoot Makeup",
            date: "July 17, 2024",
            time: "11:00 AM",
            status: "Completed",
        },
    ]

    const alerts = [
        {
            id: 1,
            type: "booking",
            message: "Olivia Harper booked Bridal Makeup",
            status: "New Booking",
        },
        {
            id: 2,
            type: "cancellation",
            message: "Chloe Bennett cancelled Evening Glam",
            status: "Cancellation",
        },
        {
            id: 3,
            type: "inquiry",
            message: "Isabella Clark inquired about Photoshoot Makeup",
            status: "New Inquiry",
        },
    ]

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Overview</h1>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile View - Show for mobile screens */}
            <div className="block md:hidden">
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Upcoming</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <User size={24} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Bridal Makeup</h3>
                                <p className="text-sm text-gray-500">
                                    10:00 AM - 11:00 AM
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <User size={24} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    Photoshoot Makeup
                                </h3>
                                <p className="text-sm text-gray-500">
                                    1:00 PM - 2:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <User size={24} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">Bridal Makeup</h3>
                                <p className="text-sm text-gray-500">
                                    10:00 AM - 11:00 AM
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <User size={24} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    Photoshoot Makeup
                                </h3>
                                <p className="text-sm text-gray-500">
                                    1:00 PM - 2:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Daily Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg border p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">
                                Revenue
                            </h3>
                            <p className="text-2xl font-bold">$250</p>
                        </div>
                        <div className="bg-white rounded-lg border p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">
                                Bookings
                            </h3>
                            <p className="text-2xl font-bold">2</p>
                        </div>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Weekly Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg border p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">
                                Revenue
                            </h3>
                            <p className="text-2xl font-bold">$1,250</p>
                        </div>
                        <div className="bg-white rounded-lg border p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">
                                Bookings
                            </h3>
                            <p className="text-2xl font-bold">10</p>
                        </div>
                    </div>
                </section>

                {/* <section className="mb-20">
                    <h2 className="text-xl font-bold mb-4">Alerts</h2>
                    <div className="bg-white rounded-lg border p-4 flex items-center space-x-3">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <span>New booking inquiry</span>
                    </div>
                </section> */}
            </div>

            {/* Desktop View - Hide on mobile */}
            <div className="hidden md:block">
                {/* Upcoming Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Upcoming</h2>
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="flex space-x-1 p-4 border-b">
                            <button
                                onClick={() => setAppointmentTab("single")}
                                className={`px-4 py-2 rounded-lg ${appointmentTab === "single" ? "bg-green-100 text-green-600" : "text-gray-600"}`}
                            >
                                Single Appointments
                            </button>
                            <button
                                onClick={() => setAppointmentTab("classes")}
                                className={`px-4 py-2 rounded-lg ${appointmentTab === "classes" ? "bg-green-100 text-green-600" : "text-gray-600"}`}
                            >
                                Classes
                            </button>
                            <button
                                onClick={() => setAppointmentTab("events")}
                                className={`px-4 py-2 rounded-lg ${appointmentTab === "events" ? "bg-green-100 text-green-600" : "text-gray-600"}`}
                            >
                                Events
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Client
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Service
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Time
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {upcomingAppointments.map((apt) => (
                                        <tr key={apt.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {apt.client}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {apt.service}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {apt.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {apt.time}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        apt.status ===
                                                        "Confirmed"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                    }`}
                                                >
                                                    {apt.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Recent Bookings */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">
                        Recent Bookings & Inquiries
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Service
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {booking.client}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {booking.service}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {booking.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {booking.time}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Daily/Weekly Snapshot */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">
                        Daily/Weekly Snapshot
                    </h2>
                    <div className="grid grid-cols-3 lg:gap-6 gap-4">
                        <div className="bg-white rounded-lg shadow-sm lg:pl-6 pl-2 p-6">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">
                                Revenue Today
                            </h3>
                            <p className="text-2lg lg:text-xl font-bold">$350</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm lg:px-6 px-2 p-6">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">
                                Calendar
                            </h3>
                            <p className="text-2lg lg:text-xl font-bold">3 Appointments</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm lg:px-6 px-2 p-6">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">
                                Pending Tasks
                            </h3>
                            <p className="text-2lg lg:text-xl font-bold">2 Tasks</p>
                        </div>
                    </div>
                </section>

                {/* Alerts */}
                <section>
                    <h2 className="text-xl font-bold mb-4">Alerts</h2>
                    <div className="space-y-3">
                        {alerts.map((alert) => (
                            <div
                                key={alert.id}
                                className="bg-white rounded-lg shadow-sm p-4 flex items-start space-x-3"
                            >
                                <div className="flex-shrink-0">
                                    {alert.type === "booking" && (
                                        <Calendar className="w-5 h-5 text-green-500" />
                                    )}
                                    {alert.type === "cancellation" && (
                                        <Calendar className="w-5 h-5 text-red-500" />
                                    )}
                                    {alert.type === "inquiry" && (
                                        <MessageCircle className="w-5 h-5 text-blue-500" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">
                                        {alert.message}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {alert.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {/* Back to Client View Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 z-50"
            >
                Back to Client View
            </button>
        </div>
    )
}
export default AdminDashboard
