import { transactionHistory } from "@/utils/helpers";
import {User, } from "lucide-react"

const TransactionHistoryTable = () => {
    
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full hidden md:block">
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
            <div className="block md:hidden">
                                        {transactionHistory.map((element, index) => (
                                            <div key={index} className="flex space-x-3 justify-between items-center px-2 mb-4">
                                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                                    <User size={24} className="text-gray-600" />
                                                </div>
                                                     <div className="flex-1">
                                                        <h3 className="font-semibold">{element.client}</h3>
                                                        <h3 className="text-[14px]">{element.service}</h3>
                                                        <p className="text-sm text-gray-500">
                                                            {element.amount} 
                                                        </p>
                                                    </div>
                                                    <div className=""> 
                                                        <p className=" pb-2 whitespace-nowrap">
                                                            {element.date}</p>
                                                    
                                                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800`}>
                                                            {element.status}
                                                        </p>
                                                    
                                                    </div>
                                            </div> 
                                        ))}
                                    </div>
        </div>
    )
}

export default TransactionHistoryTable;
