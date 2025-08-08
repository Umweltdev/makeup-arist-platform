import { User } from "lucide-react"

const EventsTable = () => {
    const events = [
        {
            name: "Bridal Makeup",
            services: "Bridal",
            description: "90 min",
            customPricing: "$250",
            deposit: 1,
        },
        {
            name: "Special Occasion Makeup",
            services: "Bridal",
            description: "90 min",
            customPricing: "$250",
            deposit: 1,
        },
    ]
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
             <div className="md:block hidden">
            <table className=" w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Services
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Description
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Custom Pricing
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Deposit
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {event.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {event.services}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {event.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {event.customPricing}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {event.deposit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d] cursor-pointer">
                                Edit
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="block md:hidden">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex space-x-3 justify-between items-center px-2 mb-4"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <User size={24} className="text-gray-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{event.name}</h3>
                            <h3 className="text-[14px]">{event.services}</h3>
                            <p className="text-sm text-gray-500">
                                {event.description}
                            </p>
                        </div>
                        <div className="">
                            <p className=" pb-2 whitespace-nowrap">
                                {event.customPricing}
                            </p>

                            <p
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}
                            >
                                {event.deposit}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsTable
