import { Calendar, CreditCard } from "lucide-react"
import Button from "@/components/Button"
import { Navbar } from "@/components/index"

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Upcoming Appointments
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Calendar
                                        className="text-gray-600"
                                        size={24}
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            July 15, 2024, 10:00 AM
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            123 Main St, Anytown
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            Bridal Makeup
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="hover:underline "
                                >
                                    Reschedule
                                </Button>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Calendar
                                        className="text-gray-600"
                                        size={24}
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            August 20, 2024, 2:00 PM
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            456 Oak Ave, Anytown
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            Special Event Makeup
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="hover:underline "
                                >
                                    Reschedule
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Past Bookings
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Calendar
                                        className="text-gray-600"
                                        size={24}
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            June 5, 2024, 4:00 PM
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            789 Pine Ln, Anytown
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            Prom Makeup
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="hover:underline "
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Payment History
                        </h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between py-3 border-b">
                                <div className="flex items-center space-x-4">
                                    <CreditCard
                                        className="text-gray-600"
                                        size={20}
                                    />
                                    <div>
                                        <p className="font-medium">
                                            Prom Makeup
                                        </p>
                                        <p className="text-sm text-[#5da45d]">
                                            June 5, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg border-[#cfe7cf] max-w-2xl"
                                    defaultValue=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg border-[#cfe7cf] max-w-2xl"
                                    defaultValue=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border rounded-lg border-[#cfe7cf] max-w-2xl"
                                    defaultValue=""
                                />
                            </div>
                            <Button variant="primary" className=" flex-end">
                                Update Profile
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
