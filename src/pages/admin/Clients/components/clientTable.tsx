import {clients} from "@/utils/helpers"

const ClientTable = () => {
    
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full">
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
    )
}

export default ClientTable
