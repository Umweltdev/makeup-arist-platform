import { clients } from "@/utils/helpers"
//gitimport { User } from "lucide-react"

const ClientTable = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <div className="w-full md:block hidden">
                <table className="w-full ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                                Contact
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                                Bookings
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                                Last Activity
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {client.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                    {client.contact}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className=" inline-flex text w-full py-2 justify-center items-center leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                    {client.bookings}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                    {client.lastActivity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="block md:hidden">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="flex space-x-3 justify-between items-center px-2 mb-4"
                    >
                        {/* <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <User size={24} className="text-gray-600" />
                        </div> */}
                        <div className="flex-1">
                            <h3 className="font-semibold">{client.name}</h3>
                            <h3 className="text-[14px]">{client.contact}</h3>
                            <p className="text-sm text-gray-500">
                                {client.bookings} bookings
                            </p>
                        </div>
                        <div className="">
                            <p className=" pb-2 whitespace-nowrap text-sm">
                                {client.lastActivity}
                            </p>

                            <p
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}
                            >
                                {client.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientTable
