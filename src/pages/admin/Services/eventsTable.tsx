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
            <table className="w-full">
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
    )
}

export default EventsTable
