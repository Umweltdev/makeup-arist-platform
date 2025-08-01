import { transactionHistory } from "@/utils/helpers";

const TransactionHistoryTable = () => {
    
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Client
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Service
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-md font-medium text-gray-600  tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {transactionHistory.map((element, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {element.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {element.client}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                
                                {element.service}
                                
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                                {element.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                               <span className=" inline-flex text w-full py-2 justify-center items-center leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                    {element.status}
                                    </span>
                                
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[#5d895d]">
                               
                                    Refund
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistoryTable;
